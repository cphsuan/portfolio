'use client'

import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '' // Hidden field for spam protection
  })
  
  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'loading' | 'success' | 'error'
    message?: string
  }>({ type: 'idle' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setFormStatus({ type: 'loading', message: 'Sending message...' })
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setFormStatus({ 
          type: 'success', 
          message: data.message || 'Thank you for your message! I\'ll get back to you soon.' 
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          honeypot: ''
        })
      } else {
        setFormStatus({ 
          type: 'error', 
          message: data.error || 'Something went wrong. Please try again.' 
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      })
    }
  }

  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">Let&apos;s Work Together</h2>
        <p className="text-muted-foreground mb-16 text-center text-lg">
          Ready to collaborate on innovative SaaS solutions? Let&apos;s connect!
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-semibold">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:cphsuan17@gmail.com" className="text-muted-foreground text-sm hover:underline">
                      cphsuan17@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="text-lg">💼</span>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <a href="https://linkedin.com/in/viviannechao" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:underline">
                      linkedin.com/in/viviannechao
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="text-lg">🐙</span>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <a href="https://github.com/cphsuan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:underline">
                      github.com/cphsuan
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground text-sm">New Taipei, Taiwan</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-lg font-semibold">What I&apos;m Looking For</h4>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 text-green-600 h-2 w-2 rounded-full"></div>
                  <span>Frontend engineering opportunities</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 text-green-600 h-2 w-2 rounded-full"></div>
                  <span>SaaS and React projects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 text-green-600 h-2 w-2 rounded-full"></div>
                  <span>Cross-functional collaborations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-500/20 text-green-600 h-2 w-2 rounded-full"></div>
                  <span>Technical consulting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted/30 rounded-lg p-8">
            <h3 className="mb-6 text-xl font-semibold">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    maxLength={100}
                    className="bg-background border-input focus:border-foreground block w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background border-input focus:border-foreground block w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  minLength={5}
                  maxLength={200}
                  className="bg-background border-input focus:border-foreground block w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  placeholder="Project inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  className="bg-background border-input focus:border-foreground block w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              {/* Honeypot field for spam protection (hidden) */}
              <input
                type="text"
                id="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />
              
              {/* Status Messages */}
              {formStatus.type !== 'idle' && (
                <div className={`rounded-md p-3 text-sm ${
                  formStatus.type === 'success' ? 'bg-green-500/10 text-green-600' :
                  formStatus.type === 'error' ? 'bg-red-500/10 text-red-600' :
                  'bg-blue-500/10 text-blue-600'
                }`}>
                  {formStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={formStatus.type === 'loading'}
                className="bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 w-full rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-2xl p-8">
            <h3 className="mb-4 text-2xl font-bold">Ready to Build Something Great?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let&apos;s discuss how we can create scalable SaaS solutions together
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a 
                href="mailto:cphsuan17@gmail.com?subject=Schedule%20a%20Call" 
                className="bg-foreground text-background hover:bg-foreground/90 inline-block rounded-lg px-8 py-3 font-medium transition-colors"
              >
                Schedule a Call
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="border-foreground hover:bg-foreground hover:text-background inline-block rounded-lg border px-8 py-3 font-medium transition-colors"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}