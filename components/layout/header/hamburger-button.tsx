'use client'

import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface HamburgerButtonProps {
  onClick: () => void
}

export function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 md:hidden"
      onClick={onClick}
    >
      <Menu className="h-5 w-5" />
      <span className="sr-only">Open menu</span>
    </Button>
  )
}
