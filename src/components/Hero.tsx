import React, { useEffect, useRef, useState } from 'react'
import { ArrowDown, Download, MessageCircle } from 'lucide-react'
import { Button } from './ui/button'
import { personalInfo, socialLinks } from '../data/portfolio'

const Hero: React.FC = () => {
  const [showLearnMore, setShowLearnMore] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      // Check if About section is in view
      const aboutSection = document.getElementById('about');
      let aboutInView = false;
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        aboutInView = aboutRect.top < window.innerHeight && aboutRect.bottom > 0;
      }
      // Check if there is enough space at the bottom of the viewport (at least 80px)
      const enoughSpaceAtBottom = window.innerHeight - rect.bottom > 80;
      // Show only if hero is the main section in view, About is NOT in view, and enough space at bottom
      setShowLearnMore(rect.top <= 0 && rect.bottom > window.innerHeight / 2 && !aboutInView && enoughSpaceAtBottom);
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="min-h-screen flex flex-col overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-background dark:via-background dark:to-card/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20 pointer-events-none select-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,119,198,0.1),transparent_50%)]"></div>
      </div>

      {/* Main hero content fills available space */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="max-w-5xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-center w-full gap-8 xl:gap-12 2xl:gap-16 py-16 md:py-24">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                I'm <span className="text-gradient">{personalInfo.name.split(' ')[0]}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground/90">
                {personalInfo.title}
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed" dangerouslySetInnerHTML={{ __html: personalInfo.description }} />
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm font-medium">
              {['Python', 'React', 'TypeScript', 'Node.js', 'Firebase', 'AI/ML', 'System Design', 'Git', 'GitHub'].map((tech, index) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-muted/50 dark:bg-card/50 text-muted-foreground rounded-full border border-border/50 hover:border-primary/50 transition-colors duration-300 animate-scale-in cursor-default hover:scale-105 hover:shadow-lg hover:shadow-neutral-400 dark:hover:shadow-lg dark:hover:shadow-white/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start items-end">
              <Button 
                size="lg" 
                className="bg-gradient-to-tr from-purple-300 via-indigo-200 to-blue-200 text-neutral-900 dark:bg-neutral-900 dark:text-white dark:font-bold dark:shadow-[0_2px_16px_#fff8] hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-glow w-full sm:w-auto border-none shadow-md text-base sm:text-lg px-4 sm:px-8 py-3 sm:py-4"
                onClick={() => {
                  const contact = document.getElementById('contact');
                  if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Got a project?
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                onClick={() => window.open(socialLinks.resume, '_blank')}
              >
                <Download className="mr-2 h-5 w-5" />
                My resume
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center mt-24 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative flex items-center justify-center">
              {/* Glowing, animated ring behind the image with vibrant color and smooth fade */}
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full z-0 pointer-events-none animate-bounce-slow-bg"
                style={{
                  background: 'radial-gradient(circle, rgba(168,85,247,0.7) 0%, rgba(99,102,241,0.5) 40%, rgba(30,41,59,0) 80%)'
                }}
              ></div>
              <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full z-0 pointer-events-none animate-bounce-slow-bg dark:block hidden"
                style={{
                  background: 'radial-gradient(circle, rgba(251,146,60,0.7) 0%, rgba(236,72,153,0.5) 40%, rgba(139,92,246,0.3) 60%, rgba(30,41,59,0) 85%)'
                }}
              ></div>
              {/* Bouncing photo with glow */}
              <div className="relative w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-neutral-800 z-10 flex items-center justify-center bg-neutral-900 animate-bounce-slow-photo shadow-[0_0_40px_10px_rgba(168,85,247,0.3)]">
                <img
                  src="/portfolio/nithin_pro.png"
                  alt="Nithin Profile"
                  className="w-full h-full object-cover rounded-full object-center shadow-[inset_0_0_40px_#0008] border-4 border-neutral-900"
                  style={{ boxShadow: '0 0 0 6px #222 inset, 0 2px 16px 0 #0006', objectPosition: 'center 40%' }}
                />
              </div>
            </div>
            {/* Learn More About Me button below the photo/ring, centered */}
            {showLearnMore && (
              <button
                onClick={scrollToAbout}
                className="hidden md:flex flex-col items-center space-y-1 text-muted-foreground hover:text-primary transition-colors duration-300 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary mt-20 bg-transparent border-none shadow-none px-0 py-0 rounded-none"
                aria-label="Scroll to about section"
              >
                <span className="text-sm font-medium">Learn More About Me</span>
                <ArrowDown className="h-5 w-5 animate-bounce" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

