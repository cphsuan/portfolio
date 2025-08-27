'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { useScrollPosition } from '@/hooks/use-scroll-position'
import { ErrorBoundary } from '@/components/shared/error-boundary'
import { Logo } from './logo'
import { NavLinks } from './nav-links'
import { ThemeToggle } from './theme-toggle'
import { HamburgerButton } from './hamburger-button'
import { MobileMenu } from '../mobile/mobile-menu'

function HeaderContent() {
  const { isScrolled } = useScrollPosition()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          'border-b',
          isScrolled
            ? 'bg-background/80 backdrop-blur-lg border-border/40'
            : 'bg-transparent border-transparent'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 md:h-16 items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLinks />
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <HamburgerButton onClick={() => setMobileMenuOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  )
}

export function Header() {
  return (
    <ErrorBoundary
      fallback={
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 md:h-16 items-center justify-center">
              <div className="text-sm text-muted-foreground">
                Navigation temporarily unavailable
              </div>
            </div>
          </div>
        </header>
      }
    >
      <HeaderContent />
    </ErrorBoundary>
  )
}