import { cn } from '@/lib/utils'

interface SkillBadgeProps {
  skill: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'outline'
  className?: string
}

export function SkillBadge({ 
  skill, 
  size = 'md', 
  variant = 'default',
  className 
}: SkillBadgeProps) {
  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  }

  const variantClasses = {
    default: 'bg-muted',
    outline: 'border border-muted-foreground/20'
  }

  return (
    <span 
      className={cn(
        'rounded-md inline-block',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {skill}
    </span>
  )
}