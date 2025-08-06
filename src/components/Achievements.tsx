import React from 'react'
import { Award, Trophy, GraduationCap, Target } from 'lucide-react'
import { achievements } from '../data/portfolio'

const Achievements: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return Award
      case 'competition':
        return Trophy
      case 'scholarship':
        return GraduationCap
      case 'certification':
        return Target
      default:
        return Award
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'award':
        return 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30'
      case 'competition':
        return 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
      case 'scholarship':
        return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
      case 'certification':
        return 'from-green-500/20 to-emerald-500/20 border-green-500/30'
      default:
        return 'from-primary/20 to-secondary/20 border-primary/30'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'award':
        return 'Award'
      case 'competition':
        return 'Competition'
      case 'scholarship':
        return 'Scholarship'
      case 'certification':
        return 'Certification'
      default:
        return 'Achievement'
    }
  }

  return (
    <section id="achievements" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Milestones and recognition that highlight my dedication to excellence and continuous learning
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement) => {
              const IconComponent = getIcon(achievement.type)
              const colorClasses = getTypeColor(achievement.type)
              const typeLabel = getTypeLabel(achievement.type)

              return (
                <div
                  key={achievement.id}
                  className={`relative bg-gradient-to-br ${colorClasses} border rounded-lg p-6 hover:scale-105 transition-all duration-300 group`}
                >
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 bg-background/80 text-foreground rounded-full text-xs font-medium">
                      {typeLabel}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-background/80 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-primary font-medium">{achievement.organization}</span>
                      <span className="text-muted-foreground">{achievement.date}</span>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-background/20 to-transparent rounded-tl-full"></div>
                </div>
              )
            })}
          </div>

          {/* Stats Section */}
          <div className="mt-16">
            <div className="bg-background border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Achievement Highlights
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  {
                    icon: Trophy,
                    number: '3+',
                    label: 'Awards & Recognition',
                    color: 'text-yellow-500',
                    bgColor: 'bg-yellow-500/10'
                  },
                  {
                    icon: Target,
                    number: '10+',
                    label: 'Projects Completed',
                    color: 'text-green-500',
                    bgColor: 'bg-green-500/10'
                  },
                  {
                    icon: GraduationCap,
                    number: '1',
                    label: 'Scholarship Recipient',
                    color: 'text-blue-500',
                    bgColor: 'bg-blue-500/10'
                  },
                  {
                    icon: Award,
                    number: '100%',
                    label: 'Commitment to Excellence',
                    color: 'text-purple-500',
                    bgColor: 'bg-purple-500/10'
                  },
                ].map((stat) => (
                  <div key={stat.label} className="text-center group">
                    <div className={`mb-4 p-4 rounded-full ${stat.bgColor} w-16 h-16 mx-auto flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{stat.number}</div>
                    <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ready to Achieve More
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                These achievements represent my commitment to continuous learning and excellence. 
                I'm excited to bring this same dedication to new challenges and opportunities.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Continuous Learner
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Team Player
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Innovation Focused
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements

