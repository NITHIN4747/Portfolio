import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from './ui/button.jsx'
import { navItems, socialLinks } from '../data/portfolio'
import DarkModeToggle from './DarkModeToggle'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [helloBlur, setHelloBlur] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      setHelloBlur(window.scrollY > 40)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/70 dark:bg-background/70 backdrop-blur-md border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Hello badge */}
        <div className="flex items-center">
          <div className={`transition-all duration-300 ${helloBlur ? 'blur-sm opacity-60' : ''}`}>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold shadow-sm border border-primary/20">
              Hello
              <span className="ml-1 text-primary text-lg animate-pulse">•</span>
            </span>
          </div>
        </div>

        {/* Center: Navigation */}
        <nav className="hidden xl:flex items-center justify-center flex-1 mx-8">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-sm whitespace-nowrap"
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Right: Social Links, theme, and Resume */}
        <div className="hidden xl:flex items-center space-x-3">
          <DarkModeToggle />
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors duration-200 p-1"
          >
            <Github size={18} />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors duration-200 p-1"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="text-foreground hover:text-primary transition-colors duration-200 p-1"
          >
            <Mail size={18} />
          </a>
          <Button
            onClick={() => window.open(socialLinks.resume, '_blank')}
            variant="outline"
            size="sm"
            className="ml-2"
          >
            Resume
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="flex xl:hidden items-center justify-center p-2 rounded-full text-foreground hover:bg-primary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-[100] flex xl:hidden items-start justify-center bg-black/40 dark:bg-black/60 transition-none">
            <div className="w-full max-w-xs mt-20 mx-2 rounded-xl shadow-xl bg-white dark:bg-neutral-900 border border-border p-4 animate-none text-black dark:text-white relative">
              {/* Existing Close Button at top right inside the menu */}
              <button
                className="absolute top-4 right-4 text-2xl text-black dark:text-white focus:outline-none z-[101]"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={28} />
              </button>
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 px-3 py-2 mt-4">
                <DarkModeToggle />
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  <Github size={20} />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-black dark:text-white hover:text-primary dark:hover:text-primary transition-colors duration-200"
                >
                  <Mail size={20} />
                </a>
                <Button
                  onClick={() => window.open(socialLinks.resume, '_blank')}
                  variant="outline"
                  size="sm"
                  className="text-black dark:text-white border-black dark:border-white"
                >
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
    </header>
  )
}

export default Header

