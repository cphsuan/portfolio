import { Resend } from 'resend'
import { ContactFormData } from './validations'

export interface EmailTemplateProps {
  name: string
  email: string
  subject: string
  message: string
}

export class EmailService {
  private resend: Resend
  private fromEmail: string
  private toEmail: string

  constructor() {
    // Only initialize Resend if we have a valid API key
    if (process.env.RESEND_API_KEY && !process.env.RESEND_API_KEY.startsWith('re_123')) {
      this.resend = new Resend(process.env.RESEND_API_KEY)
    } else {
      // Create a mock Resend instance for development
      this.resend = {} as Resend
    }
    this.fromEmail = process.env.EMAIL_FROM || 'Portfolio Contact <noreply@portfolio.dev>'
    this.toEmail = process.env.CONTACT_EMAIL || 'contact@portfolio.dev'
  }

  async sendContactEmail(data: ContactFormData): Promise<{ success: boolean; messageId?: string; error?: string }> {
    if (!this.isConfigured()) {
      return { success: false, error: 'Email service not configured' }
    }

    try {
      const response = await this.resend.emails.send({
        from: this.fromEmail,
        to: this.toEmail,
        replyTo: data.email,
        subject: `Portfolio Contact: ${data.subject}`,
        html: this.generateHtmlTemplate(data),
        text: this.generateTextTemplate(data),
      })

      return {
        success: true,
        messageId: response.data?.id || 'unknown'
      }
    } catch (error) {
      console.error('Email send error:', error)
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Failed to send email'
      }
    }
  }

  private isConfigured(): boolean {
    return !!(
      process.env.RESEND_API_KEY && 
      !process.env.RESEND_API_KEY.startsWith('re_123')
    )
  }

  private generateHtmlTemplate(data: ContactFormData): string {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
            .content { background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #555; }
            .value { margin-top: 5px; padding: 10px; background: #f9f9f9; border-radius: 3px; }
            .message { margin-top: 10px; padding: 15px; background: #f0f8ff; border-left: 4px solid #007cba; }
            .footer { margin-top: 20px; padding: 10px; color: #666; font-size: 12px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Contact Form Submission</h2>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${this.escapeHtml(data.name)}</div>
              </div>
              
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${this.escapeHtml(data.email)}">${this.escapeHtml(data.email)}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Subject:</div>
                <div class="value">${this.escapeHtml(data.subject)}</div>
              </div>
              
              <div class="message">
                <div class="label">Message:</div>
                <div style="margin-top: 10px; white-space: pre-wrap;">${this.escapeHtml(data.message)}</div>
              </div>
            </div>
            
            <div class="footer">
              Sent from your portfolio website on ${new Date().toLocaleString()}
            </div>
          </div>
        </body>
      </html>
    `
  }

  private generateTextTemplate(data: ContactFormData): string {
    return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

---
Sent from your portfolio website on ${new Date().toLocaleString()}
    `.trim()
  }

  private escapeHtml(unsafe: string): string {
    return unsafe
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }
}

// Default instance
export const emailService = new EmailService()