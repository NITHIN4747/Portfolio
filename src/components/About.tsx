import React from 'react'
import { Code, Lightbulb, Target, Users } from 'lucide-react'

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Technical Excellence',
      description: 'Proficient in modern web technologies including React, TypeScript, and Firebase with a focus on clean, maintainable code.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Mindset',
      description: 'Passionate about leveraging AI/ML and emerging technologies to solve real-world problems and create impactful solutions.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Driven to secure internship opportunities at top tech companies like Google while continuously improving my skills.',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Demonstrated leadership through NCC activities and collaborative projects, with strong communication and teamwork skills.',
    },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate software engineering student with a drive for innovation and excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Story */}
            <div className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  I'm a dedicated software engineering student with a passion for creating innovative 
                  solutions that make a real impact. My journey in technology began with curiosity 
                  about how things work, and has evolved into a deep commitment to building 
                  applications that solve meaningful problems.
                </p>
                
                <p className="text-foreground leading-relaxed">
                  Through projects like <strong className="text-primary">WYN</strong> and{' '}
                  <strong className="text-primary">OptiVue.AI</strong>, I've gained hands-on experience 
                  with cutting-edge technologies including React, Firebase, and machine learning. 
                  My internship at <strong className="text-primary">Praskla</strong> further strengthened 
                  my technical skills and taught me the importance of collaborative development.
                </p>

                <p className="text-foreground leading-relaxed">
                  Beyond coding, I'm actively involved in the tech community as a{' '}
                  <strong className="text-primary">GSSoC contributor</strong> and{' '}
                  <strong className="text-primary">Virtusa Scholar</strong>. My leadership experience 
                  in the National Cadet Corps has taught me valuable lessons about teamwork, 
                  discipline, and perseverance that I apply to every project.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Problem Solver', 'Self Taught', 'Quick Learner', 'Innovation Focused'].map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column - Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  <div className="mb-4">
                    <highlight.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '7+', label: 'Projects Completed' },
              { number: '100+', label: 'GitHub Contributions' },
              { number: '3+', label: 'Years Learning' },
              { number: '100%', label: 'Passion for Code' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

