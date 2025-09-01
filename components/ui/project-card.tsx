import { type Project } from '@/config/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-background group overflow-hidden rounded-lg border shadow-sm transition-all duration-300 hover:shadow-lg">
      <div className={`bg-gradient-to-br ${project.gradient} aspect-video w-full p-8`}>
        <div className="flex h-full items-center justify-center">
          <div className="text-6xl opacity-50">{project.icon}</div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-muted rounded px-2 py-1 text-xs">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.links.primary && (
            <button className="text-foreground hover:text-foreground/80 text-sm transition-colors">
              {project.links.primary.text}
            </button>
          )}
          {project.links.secondary && (
            <button className="text-muted-foreground hover:text-foreground text-sm transition-colors">
              {project.links.secondary.text}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}