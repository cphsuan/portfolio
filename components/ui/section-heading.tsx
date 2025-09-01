import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

export function SectionHeading({ 
  title, 
  subtitle, 
  align = 'center',
  className 
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <div className={cn(alignClasses[align], className)}>
      <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground mt-4 text-lg">{subtitle}</p>
      )}
    </div>
  )
}