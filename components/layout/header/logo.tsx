import Link from 'next/link'
import { LaptopMinimal } from 'lucide-react'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`flex items-center space-x-2 transition-all hover:scale-105 ${className}`}
    >
      <LaptopMinimal className="h-8 w-8" />
      <span className="font-bold text-lg">
        Portfolio
      </span>
    </Link>
  )
}