export function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-4 text-center text-3xl font-bold sm:text-4xl">Let's Work Together</h2>
        <p className="text-muted-foreground mb-16 text-center text-lg">
          Ready to collaborate on innovative SaaS solutions? Let's connect!
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
                    <p className="text-muted-foreground text-sm">cphsuan17@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="text-lg">💼</span>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-muted-foreground text-sm">linkedin.com/in/viviannechao</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted flex h-12 w-12 items-center justify-center rounded-lg">
                    <span className="text-lg">🐙</span>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-muted-foreground text-sm">github.com/cphsuan</p>
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
              <h4 className="mb-4 text-lg font-semibold">What I'm Looking For</h4>
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
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
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
                  rows={5}
                  className="bg-background border-input focus:border-foreground block w-full rounded-md border px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-foreground text-background hover:bg-foreground/90 w-full rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-teal-500/10 rounded-2xl p-8">
            <h3 className="mb-4 text-2xl font-bold">Ready to Build Something Great?</h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Let's discuss how we can create scalable SaaS solutions together
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <button className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-8 py-3 font-medium transition-colors">
                Schedule a Call
              </button>
              <button className="border-foreground hover:bg-foreground hover:text-background rounded-lg border px-8 py-3 font-medium transition-colors">
                View Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}