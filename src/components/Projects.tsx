import React, { useState } from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog.tsx'
import { projects, socialLinks } from '../data/portfolio'
import { Project } from '../types'

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="group relative bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
            <Star className="h-3 w-3 mr-1" />
            Featured
          </div>
        </div>
      )}

      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            target.nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="hidden absolute inset-0 items-center justify-center">
          <div className="text-6xl opacity-20">💻</div>
        </div>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Button
            onClick={() => setSelectedProject(project)}
            variant="secondary"
            size="sm"
          >
            View Details
          </Button>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {project.demoUrl && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.demoUrl, '_blank')}
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              Demo
            </Button>
          )}
          {project.githubUrl && project.id !== 'optivue-ai' && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="h-4 w-4 mr-1" />
              Code
            </Button>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating technical skills and problem-solving abilities
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button
              variant="outline"
              onClick={() => window.open(socialLinks.github, '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-2">
                  {selectedProject.title}
                  {selectedProject.featured && (
                    <div className="flex items-center px-2 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  )}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden h-full items-center justify-center">
                    <div className="text-8xl opacity-30">💻</div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">About This Project</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4">
                  {selectedProject.demoUrl && (
                    <Button
                      onClick={() => window.open(selectedProject.demoUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Demo
                    </Button>
                  )}
                  {selectedProject.githubUrl && selectedProject.id !== 'optivue-ai' && (
                    <Button
                      variant="outline"
                      onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

export default Projects

