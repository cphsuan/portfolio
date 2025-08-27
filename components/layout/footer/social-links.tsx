import { Mail } from 'lucide-react'
import { Github, Linkedin } from 'lucide-react'
import { socialLinks } from '@/config/navigation'

export function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.github && (
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-5 w-5" />
        </a>
      )}
      {socialLinks.linkedin && (
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-5 w-5" />
        </a>
      )}
      {socialLinks.email && (
        <a
          href={`mailto:${socialLinks.email}`}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Email"
        >
          <Mail className="h-5 w-5" />
        </a>
      )}
    </div>
  )
}