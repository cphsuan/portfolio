'use client'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleIn'
  delay?: number
  duration?: number
}

const animationClasses = {
  fadeUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  slideLeft: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  slideRight: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  scaleIn: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
}

export function AnimatedSection({
  children,
  className,
  animation = 'fadeUp',
  delay = 0,
  duration = 600,
}: AnimatedSectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  })

  const animClasses = animationClasses[animation]

  return (
    <div
      ref={ref}
      className={cn(
        'transform-gpu transition-all ease-out',
        isIntersecting ? animClasses.animate : animClasses.initial,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
