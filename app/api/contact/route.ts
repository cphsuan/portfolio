import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

// Initialize Resend with API key (we'll use a test key for now)
const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789')

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters').max(200),
  message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
  honeypot: z.string().optional(), // Spam protection field
})

// Rate limiting: Store request timestamps by IP
const requestTimestamps = new Map<string, number[]>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000 // 1 hour
const MAX_REQUESTS_PER_WINDOW = 5

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const timestamps = requestTimestamps.get(ip) || []
  
  // Remove old timestamps outside the window
  const recentTimestamps = timestamps.filter(
    timestamp => now - timestamp < RATE_LIMIT_WINDOW
  )
  
  if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true
  }
  
  // Add current timestamp and update map
  recentTimestamps.push(now)
  requestTimestamps.set(ip, recentTimestamps)
  
  return false
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown'
    
    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }
    
    // Parse request body
    const body = await request.json()
    
    // Validate the data
    const validationResult = contactSchema.safeParse(body)
    
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Invalid form data', details: validationResult.error.flatten() },
        { status: 400 }
      )
    }
    
    const { name, email, subject, message, honeypot } = validationResult.data
    
    // Check honeypot field for spam
    if (honeypot) {
      // Silently reject spam submissions
      return NextResponse.json(
        { success: true, message: 'Thank you for your message!' },
        { status: 200 }
      )
    }
    
    // Check if we have a valid API key
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.startsWith('re_')) {
      // In development/testing, just log the message
      console.log('Contact Form Submission:', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      })
      
      // Return success even without sending email (for development)
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! (Development mode - email not sent)',
          dev: true 
        },
        { status: 200 }
      )
    }
    
    // Send email using Resend
    try {
      const data = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: process.env.CONTACT_EMAIL || 'cphsuan17@gmail.com',
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">
            Sent from your portfolio website at ${new Date().toLocaleString()}
          </p>
        `,
        text: `
          New Contact Form Submission
          
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          
          Message:
          ${message}
          
          ---
          Sent from your portfolio website at ${new Date().toLocaleString()}
        `
      })
      
      console.log('Email sent successfully:', data)
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message! I\'ll get back to you soon.' 
        },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Failed to send email:', emailError)
      
      // Still return success to user but log the error
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you for your message!' 
        },
        { status: 200 }
      )
    }
    
  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle other methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}