export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  gradient: string
  icon: string
  links: {
    primary?: { text: string; url?: string }
    secondary?: { text: string; url?: string }
  }
}

export const projectsConfig: Project[] = [
  {
    id: 'saas-console',
    title: 'SaaS Console Platform',
    description: 'Led greenfield project at Perfect Corp using Next.js, Zustand, and TailwindCSS. Architected modular components, implemented Jest testing, and drove legacy migration.',
    technologies: ['Next.js', 'React', 'Zustand', 'TailwindCSS', 'Jest'],
    gradient: 'from-blue-500/10 to-cyan-500/10',
    icon: '⚛️',
    links: {
      primary: { text: 'Perfect Corp →' },
      secondary: { text: 'Architecture' }
    }
  },
  {
    id: 'lane-detection',
    title: 'Lane Detection & Tracking',
    description: "Master's thesis project combining machine learning and computer vision. Built lane detection, tracking, and classification system using LaneAF and ResNet101.",
    technologies: ['Python', 'Machine Learning', 'Computer Vision', 'ResNet101'],
    gradient: 'from-green-500/10 to-emerald-500/10',
    icon: '🛣️',
    links: {
      primary: { text: 'Research →' },
      secondary: { text: 'GitHub' }
    }
  },
  {
    id: 'answer-sheet',
    title: 'Answer Sheet Recognition',
    description: 'Non-traditional answer sheet identification system achieving 99.9% accuracy. Processes 100,000+ images with 0.4 second recognition time.',
    technologies: ['C#', 'Image Processing', 'Pattern Recognition', 'Algorithm Design'],
    gradient: 'from-purple-500/10 to-pink-500/10',
    icon: '📝',
    links: {
      primary: { text: '99.9% Accuracy →' },
      secondary: { text: 'Details' }
    }
  },
  {
    id: 'payment-integration',
    title: 'Multi-Platform Payment System',
    description: 'Integrated ECPay, LINE Pay, and CathayPay for web and mobile platforms. Developed universal payment flow module with comprehensive testing suite.',
    technologies: ['JavaScript', 'Payment APIs', 'React', 'Testing'],
    gradient: 'from-orange-500/10 to-yellow-500/10',
    icon: '💳',
    links: {
      primary: { text: 'Integration →' },
      secondary: { text: 'Documentation' }
    }
  },
  {
    id: 'data-migration',
    title: 'Data Analysis & Migration',
    description: 'Built Tableau dashboards for 1M+ property transactions. Migrated and optimized MySQL database with 20% performance improvement through Solr integration.',
    technologies: ['Tableau', 'MySQL', 'Solr', 'Data Analysis'],
    gradient: 'from-indigo-500/10 to-purple-500/10',
    icon: '📊',
    links: {
      primary: { text: '1M+ Records →' },
      secondary: { text: 'Dashboard' }
    }
  },
  {
    id: 'student-analytics',
    title: 'Student Attention Analytics',
    description: 'Collaborated with AI Lab at NKUST to develop attention analysis system for online learning. Used R for statistical analysis and behavior pattern recognition.',
    technologies: ['R', 'Statistical Analysis', 'Machine Learning', 'Data Visualization'],
    gradient: 'from-red-500/10 to-pink-500/10',
    icon: '🎓',
    links: {
      primary: { text: 'Research →' },
      secondary: { text: 'Results' }
    }
  }
]