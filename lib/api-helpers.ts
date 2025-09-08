import { NextRequest } from 'next/server'
import { ZodError } from 'zod'
import { ApiResponse } from './validations'

/**
 * Extracts client IP address from request headers
 */
export function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const cfConnectingIp = request.headers.get('cf-connecting-ip')

  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim()
  }

  return realIp || cfConnectingIp || 'unknown'
}

/**
 * Creates standardized API responses
 */
export function createApiResponse<T = unknown>(
  success: boolean,
  message: string,
  data?: T,
  error?: string
): ApiResponse<T> {
  return {
    success,
    message,
    ...(data && { data }),
    ...(error && { error }),
  }
}

/**
 * Success response helper
 */
export function successResponse<T = unknown>(
  message: string,
  data?: T
): ApiResponse<T> {
  return createApiResponse(true, message, data)
}

/**
 * Error response helper
 */
export function errorResponse(
  message: string,
  error?: string
): ApiResponse {
  return createApiResponse(false, message, undefined, error)
}

/**
 * Handles Zod validation errors and formats them nicely
 */
export function handleValidationError(error: ZodError): ApiResponse {
  const formattedErrors = error.issues.map(issue => ({
    field: issue.path.join('.'),
    message: issue.message,
  }))

  return errorResponse(
    'Validation failed',
    JSON.stringify(formattedErrors)
  )
}

/**
 * Safe async handler that catches and formats errors
 */
export function withErrorHandler<T extends unknown[], R>(
  handler: (...args: T) => Promise<R>
) {
  return async (...args: T): Promise<R> => {
    try {
      return await handler(...args)
    } catch (error) {
      console.error('API Handler Error:', error)
      
      if (error instanceof ZodError) {
        throw new Error('Validation failed: ' + JSON.stringify(error.issues))
      }
      
      if (error instanceof Error) {
        throw error
      }
      
      throw new Error('An unexpected error occurred')
    }
  }
}

/**
 * CORS headers for API routes
 */
export function getCorsHeaders(origin?: string) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  }
}

/**
 * Security headers for API routes
 */
export function getSecurityHeaders() {
  return {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  }
}