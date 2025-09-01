import { projectsConfig } from '@/config/projects'
import { ProjectCard } from '@/components/ui/project-card'

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
            {projectsConfig.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
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