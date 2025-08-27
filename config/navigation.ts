import { Home, User, FolderOpen, Mail } from 'lucide-react'

export const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: User },
  { label: 'Projects', href: '#projects', icon: FolderOpen },
  { label: 'Contact', href: '#contact', icon: Mail },
] as const

export const socialLinks = {
  github: process.env.NEXT_PUBLIC_GITHUB_URL || '#',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@example.com',
} as const