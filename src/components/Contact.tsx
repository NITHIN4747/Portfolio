import React, { useState } from 'react'
import { Send, Mail, MapPin, Github, Linkedin } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input.tsx'
import { Textarea } from './ui/textarea.tsx'
import { socialLinks } from '../data/portfolio'
import { ContactForm } from '../types'
import { submitContactForm } from '../services/contactService'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Submit to Firebase Firestore
      console.log('Submitting form data:', formData)
      await submitContactForm(formData)
      console.log('Form submitted successfully!')

      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Contact form error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/NITHIN4747',
      href: socialLinks.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/nithink47',
      href: socialLinks.linkedin,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tamil Nadu, India',
      href: null,
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  Let's Connect
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're a recruiter looking for talented developers, a fellow developer 
                  interested in collaboration, or someone with an exciting project idea, I'd love 
                  to hear from you. I'm particularly interested in internship opportunities at 
                  innovative tech companies.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith('http') ? '_blank' : undefined}
                          rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location Map */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Location</h4>
                <div className="rounded-lg overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d5808.431310373993!2d77.25762288252324!3d11.195541802195551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1754499150891!5m2!1sen!2sin"
                    width="100%"
                    height="200"
                    style={{border: 0}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Quick Actions</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => window.open(socialLinks.resume, '_blank')}
                    variant="outline"
                    className="flex-1"
                  >
                    Download Resume
                  </Button>
                  <Button
                    onClick={() => window.open(socialLinks.linkedin, '_blank')}
                    variant="outline"
                    className="flex-1"
                  >
                    Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-background border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or just say hello!"
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-600 text-sm">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-600 text-sm">
                    Sorry, there was an error sending your message. Please try again or contact me directly.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

