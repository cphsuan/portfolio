// Project types
export interface ProjectLink {
  text: string
  url?: string
  external?: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  gradient: string
  icon: string
  links: {
    primary?: ProjectLink
    secondary?: ProjectLink
  }
  featured?: boolean
  category?: string
}

// Experience types
export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
  current?: boolean
  location?: string
  type?: 'full-time' | 'part-time' | 'contract' | 'internship'
}

// Contact form types
export interface FormFieldError {
  field: string
  message: string
}

export interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  isError: boolean
  message: string
  errors: Record<string, string>
}

// Navigation types
export interface NavigationItem {
  href: string
  label: string
  external?: boolean
}

export interface SocialLink {
  name: string
  href: string
  icon: string
  external: boolean
}

// Component props
export interface PageProps {
  params: Record<string, string>
  searchParams: Record<string, string | string[] | undefined>
}

export interface LayoutProps {
  children: React.ReactNode
}

// Theme types
export type Theme = 'light' | 'dark' | 'system'

// Device types
export interface DeviceCapabilities {
  hasWebGL: boolean
  hasTouch: boolean
  deviceMemory?: number
  prefersReducedMotion: boolean
  isMobile: boolean
}

// API types
export interface ApiError {
  code: string
  message: string
  field?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  hasNext: boolean
  hasPrevious: boolean
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

// Generic component types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  'data-testid'?: string
}