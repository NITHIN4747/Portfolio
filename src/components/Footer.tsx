import React from 'react'
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { socialLinks, navItems } from '../data/portfolio'

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-secondary/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Software Engineer Portfolio
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Passionate about building innovative solutions with modern technologies. 
                Currently seeking internship opportunities to contribute to meaningful projects 
                and grow as a software engineer.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="p-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Mail className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href={`mailto:${socialLinks.email}`}
                    className="text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {socialLinks.email}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Status</div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-foreground text-sm">Available for opportunities</span>
                  </div>
                </div>
                <Button
                  onClick={() => window.open(socialLinks.resume, '_blank')}
                  variant="outline"
                  size="sm"
                  className="mt-4"
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center text-sm text-muted-foreground mb-4 sm:mb-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              <span>By NITHIN</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

