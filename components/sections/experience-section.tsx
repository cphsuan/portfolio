import { experienceConfig, educationConfig } from '@/config/experience'

export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-muted md:left-1/2 md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {experienceConfig.map((experience, index) => (
              <div key={experience.id} className="relative flex items-start md:justify-center">
                <div className={`absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full ${
                  index === 0 ? 'bg-foreground' : 'bg-muted-foreground'
                } md:left-1/2`}></div>
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:text-right'
                }`}>
                  <div className="rounded-lg bg-muted/30 p-6">
                    <div className={`mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between ${
                      index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                    }`}>
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <span className="text-sm text-muted-foreground">{experience.period}</span>
                    </div>
                    <p className="mb-3 font-medium text-blue-600">{experience.company}</p>
                    <ul className={`space-y-2 text-sm text-muted-foreground ${
                      index % 2 !== 0 ? 'md:text-right' : ''
                    }`}>
                      {experience.description.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                    {experience.technologies && (
                      <div className={`mt-4 flex flex-wrap gap-2 ${
                        index % 2 !== 0 ? 'md:justify-end' : ''
                      }`}>
                        {experience.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="rounded bg-muted px-2 py-1 text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="mb-8 text-center text-2xl font-semibold">Education</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {educationConfig.map((education) => (
              <div key={education.id} className="rounded-lg bg-muted/30 p-6">
                <h4 className="mb-2 text-lg font-semibold">{education.degree}</h4>
                <p className="mb-1 text-sm font-medium text-blue-600">{education.school}</p>
                <p className="mb-3 text-sm text-muted-foreground">{education.period}</p>
                {education.description && (
                  <p className="text-sm text-muted-foreground">{education.description}</p>
                )}
                {education.achievements && (
                  <ul className="mt-3 space-y-1">
                    {education.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground">• {achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}