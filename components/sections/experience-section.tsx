export function ExperienceSection() {
  return (
    <section id="experience" className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">Work Experience</h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 h-full w-0.5 bg-muted md:left-1/2 md:-translate-x-0.5"></div>
          
          <div className="space-y-12">
            {/* Current Role - Perfect Corp */}
            <div className="relative flex items-start md:justify-center">
              <div className="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full bg-foreground md:left-1/2"></div>
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <div className="rounded-lg bg-muted/30 p-6">
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">Frontend Engineer</h3>
                    <span className="text-sm text-muted-foreground">March 2023 - Present</span>
                  </div>
                  <p className="mb-3 font-medium text-blue-600">Perfect Corp.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Led greenfield project using Next.js, Zustand, and TailwindCSS</li>
                    <li>• Collaborated with 5+ cross-functional teams for feature development</li>
                    <li>• Implemented CRM system with React and RESTful APIs</li>
                    <li>• Built subscription workflows with Stripe and CleverBridge integration</li>
                    <li>• Optimized Solr-based search system for improved performance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Previous Role - Eastern Union */}
            <div className="relative flex items-start md:justify-center">
              <div className="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full bg-muted-foreground md:left-1/2"></div>
              <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8 md:text-right">
                <div className="rounded-lg bg-muted/30 p-6">
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between md:flex-row-reverse">
                    <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
                    <span className="text-sm text-muted-foreground">May 2020 - May 2022</span>
                  </div>
                  <p className="mb-3 font-medium text-purple-600">Eastern Union Interactive Corp.</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Developed user models for e-commerce and loan businesses using R</li>
                    <li>• Built real-time User Tags system for behavior tracking</li>
                    <li>• Created Tableau dashboards for KPI monitoring and analytics</li>
                    <li>• Designed daily dashboards for remittance and competitor analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="relative flex items-start md:justify-center">
              <div className="absolute left-8 h-4 w-4 -translate-x-1/2 rounded-full bg-muted-foreground md:left-1/2"></div>
              <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
                <div className="rounded-lg bg-muted/30 p-6">
                  <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-xl font-semibold">M.S. Information Management</h3>
                    <span className="text-sm text-muted-foreground">Jan 2021 - Feb 2023</span>
                  </div>
                  <p className="mb-3 font-medium text-green-600">National Taiwan University of Science and Technology</p>
                  <p className="text-sm text-muted-foreground">
                    Specialized in Computer Graphics and Multimedia Systems. 
                    Thesis: "Lane Detection, Tracking, Classification and Applications Based on Dashcam Videos"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}