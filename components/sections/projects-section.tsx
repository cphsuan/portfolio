export function ProjectsSection() {
  return (
    <section id="projects" className="bg-muted/20 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">Featured Projects</h2>
          <p className="text-muted-foreground mb-16 text-center text-lg">
            A showcase of my technical expertise and innovative solutions
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 - Perfect Corp SaaS Console */}
            <div className="bg-background group overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 aspect-video w-full p-8">
                <div className="flex h-full items-center justify-center">
                  <div className="text-6xl opacity-50">⚛️</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">SaaS Console Platform</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Led greenfield project at Perfect Corp using Next.js, Zustand, and TailwindCSS. 
                  Architected modular components, implemented Jest testing, and drove legacy migration.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {['Next.js', 'React', 'Zustand', 'TailwindCSS', 'Jest'].map((tech) => (
                    <span key={tech} className="bg-muted rounded px-2 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="text-foreground hover:text-foreground/80 text-sm transition-colors">
                    Perfect Corp →
                  </button>
                  <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Architecture
                  </button>
                </div>
              </div>
            </div>

            {/* Project 2 - Lane Detection System */}
            <div className="bg-background group overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 aspect-video w-full p-8">
                <div className="flex h-full items-center justify-center">
                  <div className="text-6xl opacity-50">🛣️</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Lane Detection & Tracking</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Master's thesis project combining machine learning and computer vision. 
                  Built lane detection, tracking, and classification system using LaneAF and ResNet101.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {['Python', 'Machine Learning', 'Computer Vision', 'ResNet101'].map((tech) => (
                    <span key={tech} className="bg-muted rounded px-2 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="text-foreground hover:text-foreground/80 text-sm transition-colors">
                    Research →
                  </button>
                  <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            </div>

            {/* Project 3 - Answer Sheet Recognition */}
            <div className="bg-background group overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 aspect-video w-full p-8">
                <div className="flex h-full items-center justify-center">
                  <div className="text-6xl opacity-50">📝</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Answer Sheet Recognition</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Non-traditional answer sheet identification system achieving 99.9% accuracy. 
                  Processes 100,000+ images with 0.4 second recognition time.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {['C#', 'Image Processing', 'Pattern Recognition', 'Algorithm Design'].map((tech) => (
                    <span key={tech} className="bg-muted rounded px-2 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="text-foreground hover:text-foreground/80 text-sm transition-colors">
                    99.9% Accuracy →
                  </button>
                  <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>

            {/* Project 4 - CRM Integration */}
            <div className="bg-background group overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 aspect-video w-full p-8">
                <div className="flex h-full items-center justify-center">
                  <div className="text-6xl opacity-50">💼</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">CRM System Integration</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Developed React-based CRM system with RESTful APIs for customer interaction management. 
                  Implemented subscription workflows with Stripe and CleverBridge integration.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {['React', 'RESTful APIs', 'Stripe', 'Java Spring Boot'].map((tech) => (
                    <span key={tech} className="bg-muted rounded px-2 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="text-foreground hover:text-foreground/80 text-sm transition-colors">
                    Enterprise →
                  </button>
                  <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Integration
                  </button>
                </div>
              </div>
            </div>

            {/* Project 5 - User Analytics System */}
            <div className="bg-background group overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 aspect-video w-full p-8">
                <div className="flex h-full items-center justify-center">
                  <div className="text-6xl opacity-50">📊</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">Real-time User Analytics</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  Built real-time User Tags system for behavior tracking and Tableau dashboards 
                  for KPI monitoring at Eastern Union. Developed user models using R.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {['R', 'Tableau', 'Data Analytics', 'Real-time Systems'].map((tech) => (
                    <span key={tech} className="bg-muted rounded px-2 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="text-foreground hover:text-foreground/80 text-sm transition-colors">
                    Analytics →
                  </button>
                  <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    Dashboard
                  </button>
                </div>
              </div>
            </div>

            {/* Project 6 - Portfolio Website */}
            <div className="bg-background group overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-br from-teal-500/10 to-green-500/10 aspect-video w-full p-8">
                <div className="flex h-full items-center justify-center">
                  <div className="text-6xl opacity-50">🎨</div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">3D Portfolio Website</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  This portfolio featuring geometric whale shark visualization with Three.js, 
                  responsive design, and modern React architecture.
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {['Next.js', 'Three.js', 'TailwindCSS', 'TypeScript'].map((tech) => (
                    <span key={tech} className="bg-muted rounded px-2 py-1 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button className="text-foreground hover:text-foreground/80 text-sm transition-colors">
                    You're here! →
                  </button>
                  <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
            <button className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-6 py-3 transition-colors">
              View GitHub Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}