import { useEffect, useState } from 'react'
import { SCROLL_CONFIG } from '@/lib/constants'

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)
      setIsScrolled(currentScrollY > SCROLL_CONFIG.HEADER_BLUR_THRESHOLD)
    }

    // Set initial value
    handleScroll()

    // Add event listener with debounce
    let ticking = false
    const updateScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', updateScroll)
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return { scrollY, isScrolled }
}