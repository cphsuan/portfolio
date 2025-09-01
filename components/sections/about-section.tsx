import { profileConfig } from '@/config/profile'
import { AnimatedSection } from '@/components/ui/animated-section'
import { StaggeredGrid } from '@/components/ui/staggered-grid'

export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <AnimatedSection animation="fadeUp" delay={0}>
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">About Me</h2>
        </AnimatedSection>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Introduction */}
          <AnimatedSection animation="slideLeft" delay={200}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">{profileConfig.bio.title}</h3>
              <div className="space-y-4 text-muted-foreground">
                {profileConfig.bio.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right column - Skills & Technologies */}
          <AnimatedSection animation="slideRight" delay={300}>
            <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Technologies I Work With</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-lg font-medium">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {profileConfig.skills.frontend.map((tech) => (
                    <span key={tech} className="bg-muted rounded-md px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-medium">Backend & Data</h4>
                <div className="flex flex-wrap gap-2">
                  {profileConfig.skills.backend.map((tech) => (
                    <span key={tech} className="bg-muted rounded-md px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-medium">Tools & Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {profileConfig.skills.tools.map((tech) => (
                    <span key={tech} className="bg-muted rounded-md px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Experience highlights */}
        <AnimatedSection animation="fadeUp" delay={500}>
          <div className="mt-16">
            <h3 className="mb-8 text-center text-2xl font-semibold">Experience Highlights</h3>
            <StaggeredGrid 
              className="gap-6 md:grid-cols-3"
              staggerDelay={100}
              animation="scaleIn"
            >
              {profileConfig.highlights.map((highlight) => (
                <div key={highlight.label} className="bg-muted/30 rounded-lg p-6 text-center transition-all duration-300 hover:bg-muted/40 hover:scale-105 transform-gpu">
                  <div className="text-foreground mb-2 text-2xl font-bold">{highlight.value}</div>
                  <div className="text-muted-foreground text-sm">{highlight.label}</div>
                </div>
              ))}
            </StaggeredGrid>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}