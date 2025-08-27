import { useEffect } from 'react'

export function useScrollLock(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return

    // Save original body style
    const originalStyle = window.getComputedStyle(document.body).overflow

    // Lock scroll
    document.body.style.overflow = 'hidden'

    // Cleanup function to restore scroll
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isLocked])
}