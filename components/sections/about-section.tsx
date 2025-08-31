export function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">About Me</h2>
        
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Introduction */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Frontend Engineer from Taiwan</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a frontend engineer passionate about crafting scalable SaaS consoles and modern web applications. 
                Currently at Perfect Corp, I specialize in React ecosystems and lead greenfield projects from 
                architecture design to deployment.
              </p>
              <p>
                With a Master's in Information Management from NTUST and experience in both frontend development 
                and data analysis, I bring a unique perspective to building user-centric solutions that solve 
                real business problems.
              </p>
              <p>
                My approach combines clean, maintainable code with cross-functional collaboration, having worked 
                closely with 5+ teams to deliver seamless user experiences and drive successful migrations from 
                legacy systems.
              </p>
            </div>
          </div>

          {/* Right column - Skills & Technologies */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Technologies I Work With</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="mb-3 text-lg font-medium">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Zustand', 'TailwindCSS', 'Jest', 'JavaScript', 'TypeScript'].map((tech) => (
                    <span key={tech} className="bg-muted rounded-md px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-medium">Backend & Data</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java Spring Boot', 'MySQL', 'RESTful APIs', 'Python', 'R', 'Solr'].map((tech) => (
                    <span key={tech} className="bg-muted rounded-md px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-medium">Tools & Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Tableau', 'Machine Learning', 'Computer Vision', 'C#', 'Payment Integration'].map((tech) => (
                    <span key={tech} className="bg-muted rounded-md px-3 py-1 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience highlights */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-2xl font-semibold">Experience Highlights</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <div className="text-foreground mb-2 text-2xl font-bold">3+</div>
              <div className="text-muted-foreground text-sm">Years in Tech</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <div className="text-foreground mb-2 text-2xl font-bold">99.9%</div>
              <div className="text-muted-foreground text-sm">Accuracy Achievement</div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <div className="text-foreground mb-2 text-2xl font-bold">5+</div>
              <div className="text-muted-foreground text-sm">Cross-functional Teams</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}