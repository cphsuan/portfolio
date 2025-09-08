import { NextRequest, NextResponse } from 'next/server'
import { ZodError } from 'zod'
import { contactFormSchema } from '@/lib/validations'
import { contactRateLimiter } from '@/lib/rate-limiter'
import { emailService } from '@/lib/email'
import {
  getClientIp,
  successResponse,
  errorResponse,
  handleValidationError,
  getSecurityHeaders,
} from '@/lib/api-helpers'

export async function POST(request: NextRequest) {
  const headers = getSecurityHeaders()

  try {
    // Get client IP for rate limiting
    const clientIp = getClientIp(request)
    
    // Check rate limit
    if (contactRateLimiter.isRateLimited(clientIp)) {
      const remaining = contactRateLimiter.getRemainingRequests(clientIp)
      const resetTime = contactRateLimiter.getResetTime(clientIp)
      
      return NextResponse.json(
        errorResponse(
          'Too many requests. Please try again later.',
          `Rate limit exceeded. ${remaining} requests remaining. Resets at ${resetTime ? new Date(resetTime).toISOString() : 'unknown'}`
        ),
        { 
          status: 429,
          headers: {
            ...headers,
            'X-RateLimit-Limit': '5',
            'X-RateLimit-Remaining': remaining.toString(),
            ...(resetTime && { 'X-RateLimit-Reset': resetTime.toString() }),
          }
        }
      )
    }
    
    // Parse and validate request body
    const body = await request.json()
    const validationResult = contactFormSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        handleValidationError(validationResult.error),
        { status: 400, headers }
      )
    }
    
    const formData = validationResult.data
    
    // Check honeypot field for spam
    if (formData.honeypot) {
      // Silently reject spam submissions
      return NextResponse.json(
        successResponse('Thank you for your message!'),
        { status: 200, headers }
      )
    }
    
    // Log submission for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact Form Submission:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        timestamp: new Date().toISOString(),
        ip: clientIp,
      })
    }
    
    // Attempt to send email
    const emailResult = await emailService.sendContactEmail(formData)
    
    if (emailResult.success) {
      return NextResponse.json(
        successResponse(
          'Thank you for your message! I\'ll get back to you soon.',
          { messageId: emailResult.messageId }
        ),
        { status: 200, headers }
      )
    } else {
      // Log error but still return success to user
      console.error('Email send failed:', emailResult.error)
      
      return NextResponse.json(
        successResponse(
          'Thank you for your message!',
          { dev: !process.env.RESEND_API_KEY }
        ),
        { status: 200, headers }
      )
    }
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    if (error instanceof ZodError) {
      return NextResponse.json(
        handleValidationError(error),
        { status: 400, headers }
      )
    }
    
    return NextResponse.json(
      errorResponse(
        'An error occurred. Please try again later.',
        error instanceof Error ? error.message : 'Unknown error'
      ),
      { status: 500, headers }
    )
  }
}

// Handle other methods
export async function GET() {
  const headers = getSecurityHeaders()
  
  return NextResponse.json(
    errorResponse('Method not allowed'),
    { status: 405, headers }
  )
}

export async function OPTIONS() {
  const headers = getSecurityHeaders()
  
  return new NextResponse(null, {
    status: 200,
    headers: {
      ...headers,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}