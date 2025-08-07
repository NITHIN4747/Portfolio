import { Project, Experience, Achievement, Skill, NavItem } from '../types'

export const personalInfo = {
  name: "Nithin",
  title: "Software Developer",
  description: "I'm a <strong>B.E. EEE student (2027)</strong> skilled in <strong>full-stack development</strong>, <strong>AI/ML</strong>, and <strong>system design & architecture</strong>. I’ve built projects like <strong>WYN</strong> and <strong>OptiVue.AI</strong>, and intern at <strong>Praskla Technology</strong>, modernizing real-world software systems.<strong>Virtusa Scholar</strong>, <strong>GSSoC'24'25 contributor</strong>, and <strong>ALP'24 Alum</strong> — aiming to build at top companies.",
  email: "nithinofficial47@gmail.com",
  phone: "+91 7448398216",
  location: "Coimbatore, Tamil Nadu, India."
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const projects: Project[] = [
  {
    id: 'retail-ripple-plus',
    title: 'WYN(With-You-Now)',
    description: 'Advanced retail analytics platform with AI-powered insights and real-time data visualization.',
    longDescription: 'WYN is a comprehensive retail analytics platform that leverages machine learning algorithms to provide actionable insights for retail businesses. The platform features real-time data processing, predictive analytics, and interactive dashboards built with React and Firebase.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Machine Learning', 'Chart.js', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
    githubUrl: 'https://github.com/NITHIN4747/wyn_walmart',
    featured: true,
  },
  {
    id: 'optivue-ai',
    title: 'OptiVue.AI',
    description: 'Computer vision application for optical character recognition and document analysis.',
    longDescription: 'OptiVue.AI is an advanced computer vision application that uses deep learning models for optical character recognition, document analysis, and automated data extraction. Built with Python, TensorFlow, and a React frontend.',
    technologies: ['Python', 'TensorFlow', 'React', 'OpenCV', 'FastAPI', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&crop=center',
    demoUrl: 'https://nithin4747.github.io/optivue.ai/',
    featured: true,
  },
  {
    id: 'hostel-food-management',
    title: '🍽️ Hostel Food Management System',
    description: 'A smart, efficient web application built to simplify hostel meal management, monitor food inventory, and track attendance. Developed with love by TrioLogic during a hackathon.',
    longDescription: 'The Hostel Food Management System streamlines daily hostel food operations with a centralized dashboard for admins, supervisors, and students. Features include dual attendance system (willingness marking + physical attendance), admin dashboard for student/staff management, kitchen supervisor tools for inventory tracking, and student portal for meal preferences and feedback. The system implements a two-step attendance process to optimize food preparation and reduce waste - students mark willingness 4 hours in advance, then physically attend the mess.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&h=400&fit=crop&crop=center',
    githubUrl: 'https://github.com/NITHIN4747/hostel-food-management',
    featured: false,
  },
]

export const experiences: Experience[] = [
  {
    id: 'praskla-intern',
    title: 'Software Engineering Intern',
    company: 'Praskla',
    location: 'Remote',
    startDate: '2025-06',
    endDate: 'Present',
    description: [
      'Developed and maintained React-based web applications serving 10,000+ users',
      'Implemented RESTful APIs using Node.js and Express, improving data retrieval efficiency by 40%',
      'Collaborated with cross-functional teams using Agile methodologies',
      'Optimized application performance resulting in 25% faster load times',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Git', 'GitHub'],
  },
  {
    id: 'iorange-intern',
    title: 'Full Stack Web Developer',
    company: 'IORANGE INNOVATION',
    location: 'Tiruppur, TN',
    startDate: '2024-07',
    endDate: '2024-07',
    description: [
      'Achieved 85% growth for personalized web deploy using Full Stack skills',
      'Implemented an advanced development process that reduced coding errors by 20% and improved overall team productivity',
      'Developed and deployed full-stack web applications with modern technologies',
      'Collaborated with development team to deliver high-quality solutions within tight deadlines',
    ],
    technologies: ['React', 'Node.js', 'JavaScript', 'HTML/CSS', 'Git'],
  },
]

export const achievements: Achievement[] = [
  {
    id: 'gssoc-contributor',
    title: 'GSSoC (GirlScript Summer of Code) Contributor',
    organization: 'GirlScript Foundation',
    date: '2024',
    description: 'Contributed to multiple open-source projects, ranking in top 10% of contributors with 50+ merged PRs.',
    type: 'competition',
  },
  {
    id: 'virtusa-scholar',
    title: 'Virtusa Scholar',
    organization: 'Virtusa Corporation',
    date: '2024',
    description: 'Selected as Virtusa Scholar for academic excellence and technical skills in software engineering.',
    type: 'scholarship',
  },
  {
    id: 'ncc-leadership',
    title: 'NCC Leadership Award',
    organization: 'National Cadet Corps',
    date: '2024',
    description: 'Recognized for outstanding leadership and service in National Cadet Corps activities.',
    type: 'award',
  },
  {
    id: 'hackathon-winner',
    title: 'University Hackathon 2nd Runner Up',
    organization: 'University Tech Fest',
    date: 'Apr 2025',
    description: '2nd Runner-up place in 8-hour hackathon for developing an innovative AI-powered solution.',
    type: 'competition',
  },
]

export const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },

  // Backend
  { name: 'Python', level: 85, category: 'backend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'FastAPI', level: 70, category: 'backend' },

  // Database
  { name: 'Firebase', level: 85, category: 'database' },
  { name: 'PostgreSQL', level: 70, category: 'database' },
  { name: 'SQL', level: 75, category: 'database' },

  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'GitHub', level: 85, category: 'tools' },
  { name: 'Docker', level: 65, category: 'tools' },
  { name: 'AWS', level: 60, category: 'tools' },
]

export const socialLinks = {
  github: 'https://github.com/NITHIN4747',
  linkedin: 'https://www.linkedin.com/in/nithink47',
  email: 'nithinofficial47@gmail.com',
  resume: '/portfolio/NITHIN_K_RESUME.pdf',
}

