'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { navItems } from '@/config/navigation'

interface NavLinksProps {
  isMobile?: boolean
  onItemClick?: () => void
}

export function NavLinks({ isMobile = false, onItemClick }: NavLinksProps) {
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Handle smooth scrolling for hash links
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
    onItemClick?.()
  }

  return (
    <nav
      className={cn(
        'flex',
        isMobile ? 'flex-col space-y-2' : 'items-center space-x-8'
      )}
    >
      {navItems.map((item) => {
        const Icon = item.icon
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={cn(
              'relative font-medium transition-all hover:opacity-70',
              isMobile 
                ? 'flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-accent text-base' 
                : 'text-sm after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all hover:after:w-full',
              pathname === item.href && !isMobile && 'after:w-full',
              pathname === item.href && isMobile && 'bg-accent'
            )}
          >
            {isMobile && Icon && (
              <Icon className="h-4 w-4" />
            )}
            <span>{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}