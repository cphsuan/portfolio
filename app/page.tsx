import { Header } from '@/components/layout/header/header'
import { Footer } from '@/components/layout/footer/footer'

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen pt-14 md:pt-16">
        {/* Sections will be added here */}
        <section id="home" className="container mx-auto px-4 py-20">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)]">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl text-muted-foreground text-center max-w-2xl">
              Building modern web experiences with cutting-edge technologies
            </p>
          </div>
        </section>

        <section id="about" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <p className="text-muted-foreground">About section content will go here.</p>
        </section>

        <section id="projects" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <p className="text-muted-foreground">Projects section content will go here.</p>
        </section>

        <section id="contact" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-8">Contact</h2>
          <p className="text-muted-foreground">Contact section content will go here.</p>
        </section>
      </main>
      
      <Footer />
    </>
  )
}
