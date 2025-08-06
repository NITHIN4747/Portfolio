import React from 'react'
import { MapPin, Calendar, ExternalLink } from 'lucide-react'
import { experiences } from '../data/portfolio'

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Work Experience
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and key contributions in software development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((experience) => (
                <div key={experience.id} className="relative flex items-start">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>

                  {/* Content */}
                  <div className="ml-20 w-full">
                    <div className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                            {experience.title}
                          </h3>
                          <div className="flex items-center text-primary font-medium mt-1">
                            <span>{experience.company}</span>
                            <ExternalLink className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <div className="flex flex-col sm:items-end text-sm text-muted-foreground mt-2 sm:mt-0">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>
                              {experience.startDate} - {experience.endDate || 'Present'}
                            </span>
                          </div>
                          <div className="flex items-center mt-1">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {experience.description.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="text-primary mr-2 mt-1.5 text-xs">▸</span>
                              <span className="text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Looking for New Opportunities
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm actively seeking internship opportunities at innovative tech companies 
                where I can contribute to meaningful projects and continue growing as a software engineer.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Available for Internships
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Open to Remote & On-site Positions
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

