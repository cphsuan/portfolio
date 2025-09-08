import { WhaleSharkWrapper } from '@/components/shared/whale-shark-wrapper'

export function HeroSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-5">
      <div className="container mx-auto flex h-full items-center px-4">
        <div className="flex h-full min-h-[400px] w-full flex-col sm:min-h-[500px] lg:min-h-[600px] lg:flex-row">
          {/* Text content - responsive width */}
          <div className="flex w-full flex-col justify-center space-y-4 py-8 pr-0 md:space-y-6 lg:w-[30%] lg:py-0 lg:pr-8">
            <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Vivianne Chao
            </h1>
            <h2 className="text-xl font-medium text-foreground/90 sm:text-2xl lg:text-xl xl:text-2xl">
              Frontend Engineer
            </h2>
            <p className="text-muted-foreground max-w-lg text-lg sm:text-xl">
              Crafting scalable SaaS consoles with React and modern tools
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <a href="#projects" className="bg-foreground text-background rounded-lg px-6 py-3 text-sm text-center transition-opacity hover:opacity-90 sm:text-base">
                View Projects
              </a>
              <a href="#contact" className="border-foreground hover:bg-foreground hover:text-background rounded-lg border px-6 py-3 text-sm text-center transition-colors sm:text-base">
                Contact Me
              </a>
            </div>
          </div>

          {/* Interactive whale shark - responsive display with error boundary */}
          <div className="mt-4 flex h-[250px] flex-col items-center justify-center sm:h-[300px] md:h-[350px] lg:mt-0 lg:h-[400px] lg:w-[70%] xl:h-[450px]">
            <WhaleSharkWrapper />
          </div>
        </div>
      </div>
    </section>
  )
}