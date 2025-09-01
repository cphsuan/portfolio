export const profileConfig = {
  name: 'Vivianne Chao',
  title: 'Frontend Engineer',
  company: 'Perfect Corp',
  location: 'Taiwan',
  tagline:
    'Frontend engineer crafting scalable SaaS consoles with React and modern tools.',

  bio: {
    title: 'Frontend Engineer',
    paragraphs: [
      "I'm a frontend engineer passionate about crafting scalable SaaS consoles and modern web applications. Currently at Perfect Corp, I specialize in React ecosystems and lead greenfield projects from architecture design to deployment.",
      "With a Master's in Information Management from NTUST and experience in both frontend development and data analysis, I bring a unique perspective to building user-centric solutions that solve real business problems.",
      'My approach combines clean, maintainable code with cross-functional collaboration, having worked closely with 5+ teams to deliver seamless user experiences and drive successful migrations from legacy systems.',
    ],
  },

  skills: {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Zustand',
      'TailwindCSS',
      'Jest',
    ],
    backend: [
      'Java Spring Boot',
      'MySQL',
      'RESTful APIs',
      'Python',
      'R',
      'Solr',
    ],
    tools: ['Git'],
  },

  highlights: [
    { value: '3+', label: 'Years in Tech' },
    { value: '3+', label: 'Console Platform' },
    { value: '5+', label: 'Cross-functional Teams' },
  ],

  social: {
    github: 'https://github.com/cphsuan',
    linkedin: 'https://www.linkedin.com/in/viviannechao',
    email: 'cphsuan17@gmail.com',
  },
} as const

export type ProfileConfig = typeof profileConfig
