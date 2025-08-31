import { Header } from '@/components/layout/header/header'
import { Footer } from '@/components/layout/footer/footer'
import { WhaleSharkScene } from '@/components/shared/whale-shark-3d'

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen pt-14 md:pt-16">
        {/* Sections will be added here */}
        <section id="home" className="container mx-auto px-4 py-5">
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="flex h-full min-h-[400px] w-full flex-col sm:min-h-[500px] lg:min-h-[600px] lg:flex-row">
              {/* Text content - responsive width */}
              <div className="flex w-full flex-col justify-center space-y-4 py-8 pr-0 md:space-y-6 lg:w-[30%] lg:py-0 lg:pr-8">
                <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  Welcome to My Portfolio
                </h1>
                <p className="text-muted-foreground max-w-lg text-lg sm:text-xl">
                  Building modern web experiences with cutting-edge technologies
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button className="bg-foreground text-background rounded-lg px-6 py-3 text-sm transition-opacity hover:opacity-90 sm:text-base">
                    View Projects
                  </button>
                  <button className="border-foreground hover:bg-foreground hover:text-background rounded-lg border px-6 py-3 text-sm transition-colors sm:text-base">
                    Contact Me
                  </button>
                </div>
              </div>

              {/* Interactive whale shark - responsive display */}
              <div className="mt-4 flex h-[250px] flex-col items-center justify-center sm:h-[300px] md:h-[350px] lg:mt-0 lg:h-[400px] lg:w-[70%] xl:h-[450px]">
                <WhaleSharkScene />
              </div>
            </div>
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
