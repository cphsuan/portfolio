/**
 * Simple in-memory rate limiter for API routes
 * In production, consider using Redis or a proper rate limiting service
 */
export class RateLimiter {
  private requests: Map<string, number[]> = new Map()
  private windowMs: number
  private maxRequests: number

  constructor(windowMs = 60 * 60 * 1000, maxRequests = 5) {
    this.windowMs = windowMs
    this.maxRequests = maxRequests
  }

  isRateLimited(identifier: string): boolean {
    const now = Date.now()
    const userRequests = this.requests.get(identifier) || []
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(
      timestamp => now - timestamp < this.windowMs
    )

    if (validRequests.length >= this.maxRequests) {
      return true
    }

    // Add current request and update
    validRequests.push(now)
    this.requests.set(identifier, validRequests)
    
    return false
  }

  getRemainingRequests(identifier: string): number {
    const now = Date.now()
    const userRequests = this.requests.get(identifier) || []
    
    const validRequests = userRequests.filter(
      timestamp => now - timestamp < this.windowMs
    )
    
    return Math.max(0, this.maxRequests - validRequests.length)
  }

  getResetTime(identifier: string): number | null {
    const userRequests = this.requests.get(identifier) || []
    if (userRequests.length === 0) return null
    
    const oldestRequest = Math.min(...userRequests)
    return oldestRequest + this.windowMs
  }

  clear(identifier?: string): void {
    if (identifier) {
      this.requests.delete(identifier)
    } else {
      this.requests.clear()
    }
  }
}

// Default rate limiter instance
export const contactRateLimiter = new RateLimiter(
  60 * 60 * 1000, // 1 hour window
  5 // 5 requests max
)