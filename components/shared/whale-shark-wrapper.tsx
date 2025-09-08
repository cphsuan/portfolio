'use client'

import { Component, ReactNode, Suspense, lazy, useEffect, useState } from 'react'

// Lazy load the WhaleSharkScene component
const WhaleSharkScene = lazy(() => 
  import('./whale-shark-3d').then(module => ({ 
    default: module.WhaleSharkScene 
  }))
)

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

class WhaleSharkErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('WhaleShark 3D Error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}

function WhaleSharkFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <div className="mb-4 text-6xl">🐋</div>
        <p className="text-muted-foreground text-sm">
          Interactive 3D Experience
        </p>
      </div>
    </div>
  )
}

function WhaleSharkLoader() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <div className="mb-2 h-8 w-8 animate-spin rounded-full border-2 border-foreground border-t-transparent mx-auto"></div>
        <p className="text-muted-foreground text-sm">Loading 3D...</p>
      </div>
    </div>
  )
}

export function WhaleSharkWrapper() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    // Check if mobile device with limited resources
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const isMobile = /mobile|android|iphone|ipad|phone/i.test(userAgent)
      const hasLimitedMemory = 'deviceMemory' in navigator && 
        (navigator as Navigator & { deviceMemory?: number }).deviceMemory! < 4
      const hasTouchScreen = 'ontouchstart' in window
      
      return isMobile || (hasLimitedMemory && hasTouchScreen)
    }
    
    setIsMobileDevice(checkMobile())

    // Check WebGL support
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas')
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
        return !!gl
      } catch {
        return false
      }
    }

    // Only load 3D if conditions are met
    if (!prefersReducedMotion && checkWebGL()) {
      // Small delay to ensure smooth page load
      const timer = setTimeout(() => {
        setShouldLoad(true)
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [prefersReducedMotion])

  // Don't render 3D on mobile devices with limited resources
  if (isMobileDevice && prefersReducedMotion) {
    return <WhaleSharkFallback />
  }

  // Don't render 3D if user prefers reduced motion
  if (prefersReducedMotion) {
    return <WhaleSharkFallback />
  }

  // Don't render until we've checked capabilities
  if (!shouldLoad) {
    return <WhaleSharkLoader />
  }

  return (
    <WhaleSharkErrorBoundary fallback={<WhaleSharkFallback />}>
      <Suspense fallback={<WhaleSharkLoader />}>
        <WhaleSharkScene />
      </Suspense>
    </WhaleSharkErrorBoundary>
  )
}