import React from 'react'
import { Code, Database, Server, Wrench, BookOpen } from 'lucide-react'
import { skills } from '../data/portfolio'
import { Skill } from '../types'

const Skills: React.FC = () => {
  const categoryIcons = {
    frontend: Code,
    backend: Server,
    database: Database,
    tools: Wrench,
    languages: BookOpen,
  }

  const categoryLabels = {
    frontend: 'Frontend',
    backend: 'Backend',
    database: 'Database',
    tools: 'Tools & DevOps',
    languages: 'Languages',
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, Skill[]>)

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div
          className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-primary/80 group-hover:to-primary"
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </div>
  )

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => {
              const IconComponent = categoryIcons[category as keyof typeof categoryIcons]
              const label = categoryLabels[category as keyof typeof categoryLabels]
              
              return (
                <div
                  key={category}
                  className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{label}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              Additional Technologies & Concepts
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Machine Learning',
                'Computer Vision',
                'RESTful APIs',
                'Test-Driven Development',
                'Responsive Design',
                'Performance Optimization',
                'SEO',
                'Accessibility',
                'Progressive Web Apps',
                'Socket.io',
                'OAuth',
                'Firebase',
                'Firestore',
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Goals */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Currently Learning
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {['Docker', 'TensorFlow', 'System Design'].map((learning) => (
                  <span
                    key={learning}
                    className="px-4 py-2 bg-background border border-border rounded-full text-sm font-medium text-foreground"
                  >
                    📚 {learning}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

