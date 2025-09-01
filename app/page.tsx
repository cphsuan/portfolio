import { Header } from '@/components/layout/header/header'
import { Footer } from '@/components/layout/footer/footer'
import { 
  HeroSection,
  AboutSection,
  ProjectsSection,
  ExperienceSection,
  ContactSection 
} from '@/components/sections'

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen pt-14 md:pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  )
}
