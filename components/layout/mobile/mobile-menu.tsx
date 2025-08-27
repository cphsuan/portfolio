'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Logo } from '../header/logo'
import { NavLinks } from '../header/nav-links'
import { socialLinks } from '@/config/navigation'
import { Mail } from 'lucide-react'
import { Github, Linkedin } from 'lucide-react'
import { useScrollLock } from '@/hooks/use-scroll-lock'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useScrollLock(isOpen)
  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-[250px] sm:w-[300px]">
        <SheetHeader className="mb-8 px-2">
          <SheetTitle className="flex items-center">
            <Logo />
          </SheetTitle>
        </SheetHeader>

        {/* Mobile Navigation */}
        <div className="flex flex-col space-y-6 px-2">
          <div className="space-y-1">
            <NavLinks isMobile onItemClick={onClose} />
          </div>

          {/* Social Links */}
          <div className="pt-4 border-t">
            <div className="flex space-x-4 px-3">
              {socialLinks.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {socialLinks.email && (
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}