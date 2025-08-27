import { SocialLinks } from './social-links'
import { siteConfig } from '@/config/site'
import { ErrorBoundary } from '@/components/shared/error-boundary'

function FooterContent() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  )
}

export function Footer() {
  return (
    <ErrorBoundary
      fallback={
        <footer className="border-t">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center py-6">
              <div className="text-sm text-muted-foreground">
                Footer temporarily unavailable
              </div>
            </div>
          </div>
        </footer>
      }
    >
      <FooterContent />
    </ErrorBoundary>
  )
}