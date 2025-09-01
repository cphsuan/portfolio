export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies?: string[]
}

export interface Education {
  id: string
  degree: string
  school: string
  location: string
  period: string
  description?: string
  achievements?: string[]
}

export const experienceConfig: Experience[] = [
  {
    id: 'perfect-corp',
    title: 'Frontend Engineer',
    company: 'Perfect Corp',
    location: 'Taiwan',
    period: '2023 - Present',
    description: [
      'Spearheaded a greenfield project using Next.js, Zustand, and TailwindCSS, leading architecture design, modular component development, and unit testing with Jest, while driving the migration from a legacy codebase.',
      'Maintained and extended a React-based SaaS console, actively collaborating with 5+ cross-functional teams to scope features and ensure seamless user experience.',
      'Developed and integrated a CRM system leveraging React and RESTful APIs, enabling users to efficiently monitor and manage customer interactions.',
      'Implemented end-to-end subscription workflows including Cleverbrige and Stripe Checkout Billing integration, business logic, and role permission-based access control using Java Spring Boot.',
      'Maintained and optimized a Solr-based search system to improve blog search speed and relevance.',
    ],
    technologies: [
      'React',
      'Next.js',
      'Zustand',
      'TailwindCSS',
      'Jest',
      'TypeScript',
    ],
  },
  {
    id: 'megabank',
    title: 'Data Analyst Intern',
    company: 'Eastern Union Interactive Corp.',
    location: 'Taiwan',
    period: '2020 - 2022',
    description: [
      'Developed potential user models for new businesses (e-commerce and loans) using R.',
      'Designed and built a real-time User Tags system to capture user behavior.',
      'Created daily Tableau dashboards (remittance, competitors, e-commerce) and KPI dashboards to monitor member- ship registration and usage.',
    ],
    technologies: [
      'Java Spring Boot',
      'RESTful APIs',
      'Payment Integration',
      'MySQL',
    ],
  },
  {
    id: 'research-assistant',
    title: 'Research Assistant',
    company: 'NTUST',
    location: 'Taiwan',
    period: '2019 - 2021',
    description: [
      'Developed lane detection and tracking system using machine learning and computer vision',
      'Built answer sheet recognition system achieving 99.9% accuracy on 100,000+ images',
      'Collaborated with AI Lab at NKUST on student attention analysis research',
      'Published research findings and presented at academic conferences',
    ],
    technologies: ['Python', 'Computer Vision', 'Machine Learning', 'C#', 'R'],
  },
]

export const educationConfig: Education[] = [
  {
    id: 'master',
    degree: "Master's in Information Management",
    school: 'National Taiwan University of Science and Technology (NTUST)',
    location: 'Taiwan',
    period: '2021 - 2023',
    description:
      'Specialized in machine learning and computer vision applications',
    achievements: [
      'Thesis: Lane Detection and Tracking System using LaneAF and ResNet101',
      'GPA: 3.8/4.0',
    ],
  },
  {
    id: 'bachelor',
    degree: 'Bachelor of Statistics',
    school: 'National Chengchi University (NCCU)',
    location: 'Taiwan',
    period: '2016 - 2020',
    description: 'Foundation in software engineering and data analysis',
    achievements: [
      'Developed multiple full-stack applications',
      'Active member of programming club',
      "Dean's List recipient",
    ],
  },
]

export const certificationsConfig = [
  {
    name: 'React Advanced Patterns',
    issuer: 'Frontend Masters',
    year: '2022',
  },
]
