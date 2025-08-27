export const siteConfig = {
  name: 'Your Name', // Update this with your name
  title: 'Portfolio',
  description: 'Professional portfolio website',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og-image.png',
  links: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL,
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL,
    email: process.env.NEXT_PUBLIC_EMAIL,
  },
  creator: '@yourhandle', // Twitter/X handle if you have one
} as const

export type SiteConfig = typeof siteConfig