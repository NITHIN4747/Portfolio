// Project types
export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  imageUrl: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

// Experience types
export interface Experience {
  id: string
  title: string
  company: string
  location: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
}

// Achievement types
export interface Achievement {
  id: string
  title: string
  organization: string
  date: string
  description: string
  type: 'award' | 'certification' | 'scholarship' | 'competition'
}

// Skill types
export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'languages'
}

// Contact form types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

// Navigation types
export interface NavItem {
  label: string
  href: string
  icon?: string
}

