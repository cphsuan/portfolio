'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ContactFormDataWithHoneypot, contactFormWithHoneypotSchema } from '@/lib/validations'
import { ApiResponse } from '@/lib/validations'

interface SubmissionState {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  message: string
}

interface UseContactFormReturn extends SubmissionState {
  // React Hook Form methods
  register: ReturnType<typeof useForm<ContactFormDataWithHoneypot>>['register']
  handleSubmit: ReturnType<typeof useForm<ContactFormDataWithHoneypot>>['handleSubmit']
  reset: ReturnType<typeof useForm<ContactFormDataWithHoneypot>>['reset']
  formState: ReturnType<typeof useForm<ContactFormDataWithHoneypot>>['formState']
  watch: ReturnType<typeof useForm<ContactFormDataWithHoneypot>>['watch']
  setValue: ReturnType<typeof useForm<ContactFormDataWithHoneypot>>['setValue']
  clearErrors: ReturnType<typeof useForm<ContactFormDataWithHoneypot>>['clearErrors']
  // Custom submission handler
  onSubmit: (data: ContactFormDataWithHoneypot) => Promise<void>
}

const defaultValues: ContactFormDataWithHoneypot = {
  name: '',
  email: '',
  subject: '',
  message: '',
  honeypot: '', // Hidden spam protection field
}

export function useContactForm(): UseContactFormReturn {
  const [submissionState, setSubmissionState] = useState<SubmissionState>({
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: '',
  })

  const form = useForm<ContactFormDataWithHoneypot>({
    defaultValues,
    mode: 'onBlur', // Validate on blur for better UX
  })

  const onSubmit = async (data: ContactFormDataWithHoneypot) => {
    // Validate with Zod schema
    const validation = contactFormWithHoneypotSchema.safeParse(data)
    
    if (!validation.success) {
      // Set validation errors on form
      validation.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormDataWithHoneypot
        form.setError(field, {
          type: 'validation',
          message: issue.message,
        })
      })
      return
    }

    setSubmissionState({
      isLoading: true,
      isError: false,
      isSuccess: false,
      message: '',
    })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: ApiResponse = await response.json()

      if (response.ok && result.success) {
        setSubmissionState({
          isLoading: false,
          isSuccess: true,
          isError: false,
          message: result.message || 'Thank you for your message! I\'ll get back to you soon.',
        })

        // Reset form on success
        form.reset(defaultValues)
      } else {
        // Handle validation errors from server
        if (result.error && response.status === 400) {
          try {
            const serverErrors = JSON.parse(result.error)
            
            // Set server validation errors on form fields
            serverErrors.forEach((err: { field: string; message: string }) => {
              form.setError(err.field as keyof ContactFormDataWithHoneypot, {
                type: 'server',
                message: err.message,
              })
            })

            setSubmissionState({
              isLoading: false,
              isError: true,
              isSuccess: false,
              message: 'Please fix the errors above and try again.',
            })
          } catch {
            setSubmissionState({
              isLoading: false,
              isError: true,
              isSuccess: false,
              message: result.message || 'Something went wrong. Please try again.',
            })
          }
        } else {
          setSubmissionState({
            isLoading: false,
            isError: true,
            isSuccess: false,
            message: result.message || 'Something went wrong. Please try again.',
          })
        }
      }
    } catch (error) {
      console.error('Form submission error:', error)

      setSubmissionState({
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: 'Failed to send message. Please check your connection and try again.',
      })
    }
  }

  return {
    // React Hook Form methods
    register: form.register,
    handleSubmit: form.handleSubmit,
    reset: form.reset,
    formState: form.formState,
    watch: form.watch,
    setValue: form.setValue,
    clearErrors: form.clearErrors,
    // Custom submission handler
    onSubmit,
    // Submission state
    ...submissionState,
  }
}