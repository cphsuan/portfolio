import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'next-themes'
import Home from '@/app/page'

// Mock all the section components to avoid complex dependencies
jest.mock('@/components/sections', () => ({
  HeroSection: () => <section data-testid="hero-section">Hero Section</section>,
  AboutSection: () => <section data-testid="about-section">About Section</section>,
  ProjectsSection: () => <section data-testid="projects-section">Projects Section</section>,
  ExperienceSection: () => <section data-testid="experience-section">Experience Section</section>,
  ContactSection: () => <section data-testid="contact-section">Contact Section</section>,
}))

// Mock header and footer components
jest.mock('@/components/layout/header/header', () => ({
  Header: () => <header data-testid="header">Header</header>,
}))

jest.mock('@/components/layout/footer/footer', () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}))

// Wrapper component to provide theme context
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </ThemeProvider>
)

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Home />, { wrapper: TestWrapper })
    
    // Check if the main content container is present
    const main = screen.getByRole('main')
    expect(main).toBeInTheDocument()
    expect(main).toHaveClass('min-h-screen', 'pt-14', 'md:pt-16')
  })

  it('contains all expected sections', () => {
    render(<Home />, { wrapper: TestWrapper })
    
    // Verify all sections are rendered
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('about-section')).toBeInTheDocument()
    expect(screen.getByTestId('projects-section')).toBeInTheDocument()
    expect(screen.getByTestId('experience-section')).toBeInTheDocument()
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })

  it('has proper layout structure', () => {
    render(<Home />, { wrapper: TestWrapper })
    
    // Check the main element has correct classes for spacing
    const main = screen.getByRole('main')
    expect(main).toHaveClass('min-h-screen')
    expect(main).toHaveClass('pt-14')
    expect(main).toHaveClass('md:pt-16')
  })
})