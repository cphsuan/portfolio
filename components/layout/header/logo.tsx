import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link 
      href="/" 
      className={`flex items-center space-x-2 transition-transform hover:scale-105 ${className}`}
    >
      {/* Replace /logo.png with your actual logo image path */}
      {/* Fallback to text if image doesn't exist */}
      <div className="relative h-8 w-8">
        <Image
          src="/logo.png" 
          alt="Logo"
          width={32}
          height={32}
          className="object-contain"
          onError={(e) => {
            // Hide image and show fallback text
            e.currentTarget.style.display = 'none'
          }}
        />
        <span className="hidden font-bold text-lg">
          Portfolio
        </span>
      </div>
    </Link>
  )
}