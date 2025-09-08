'use client'

import { useContactForm } from '@/hooks/use-contact-form'

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    onSubmit,
    isLoading,
    isSuccess,
    isError,
    message,
  } = useContactForm()

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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`bg-background border-input focus:border-foreground block w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      errors.name ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`bg-background border-input focus:border-foreground block w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                      errors.email ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    placeholder="your.email@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  {...register('subject')}
                  className={`bg-background border-input focus:border-foreground block w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    errors.subject ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  placeholder="Project inquiry"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'subject-error' : undefined}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-sm text-red-600">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  {...register('message')}
                  rows={5}
                  className={`bg-background border-input focus:border-foreground block w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    errors.message ? 'border-red-500 focus:border-red-500' : ''
                  }`}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-600">
                    {errors.message.message}
                  </p>
                )}
              </div>
              
              {/* Honeypot field for spam protection (hidden) */}
              <input
                type="text"
                {...register('honeypot')}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />
              
              {/* Status Messages */}
              {(isSuccess || isError || message) && (
                <div className={`rounded-md p-3 text-sm ${
                  isSuccess ? 'bg-green-500/10 text-green-600 border border-green-500/20' :
                  isError ? 'bg-red-500/10 text-red-600 border border-red-500/20' :
                  'bg-blue-500/10 text-blue-600 border border-blue-500/20'
                }`}>
                  <div className="flex items-start gap-2">
                    <span className="text-base">
                      {isSuccess ? '✓' : isError ? '✗' : 'ℹ'}
                    </span>
                    <span>{message}</span>
                  </div>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isLoading || isSubmitting}
                className="bg-foreground text-background hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed w-full rounded-md px-4 py-2 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                {(isLoading || isSubmitting) ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
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