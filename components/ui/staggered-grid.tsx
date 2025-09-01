'use client'
import { ReactNode, Children, isValidElement } from 'react'
import { cn } from '@/lib/utils'
import { useIntersectionObserver } from '@/hooks/use-intersection-observer'

interface StaggeredGridProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  animation?: 'fadeUp' | 'scaleIn' | 'slideUp'
}

export function StaggeredGrid({
  children,
  className,
  staggerDelay = 100,
  animation = 'fadeUp',
}: StaggeredGridProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.05,
    triggerOnce: true,
  })

  const animationStyles = {
    fadeUp: {
      initial: 'opacity-0 translate-y-8',
      animate: 'opacity-100 translate-y-0',
    },
    scaleIn: {
      initial: 'opacity-0 scale-95',
      animate: 'opacity-100 scale-100',
    },
    slideUp: {
      initial: 'opacity-0 translate-y-12',
      animate: 'opacity-100 translate-y-0',
    },
  }

  const styles = animationStyles[animation]

  return (
    <div ref={ref} className={cn('grid', className)}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child

        return (
          <div
            key={index}
            className={cn(
              'transform-gpu transition-all duration-700 ease-out',
              isIntersecting ? styles.animate : styles.initial
            )}
            style={{
              transitionDelay: `${index * staggerDelay}ms`,
            }}
          >
            {child}
          </div>
        )
      })}
    </div>
  )
}
