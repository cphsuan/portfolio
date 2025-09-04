import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Logo } from '@/components/layout/header/logo'

describe('Logo Component', () => {
  it('renders the logo with text and icon', () => {
    render(<Logo />)
    
    // Check if the link is present
    const logoLink = screen.getByRole('link')
    expect(logoLink).toBeInTheDocument()
    expect(logoLink).toHaveAttribute('href', '/')
    
    // Check if the text is present
    const logoText = screen.getByText('Portfolio')
    expect(logoText).toBeInTheDocument()
    expect(logoText).toHaveClass('font-bold', 'text-lg')
  })

  it('applies custom className when provided', () => {
    const customClass = 'custom-logo-class'
    render(<Logo className={customClass} />)
    
    const logoLink = screen.getByRole('link')
    expect(logoLink).toHaveClass(customClass)
  })

  it('has proper styling classes', () => {
    render(<Logo />)
    
    const logoLink = screen.getByRole('link')
    expect(logoLink).toHaveClass('flex', 'items-center', 'space-x-2', 'transition-all', 'hover:scale-105')
  })
})