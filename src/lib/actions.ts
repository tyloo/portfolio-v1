'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { ContactFormSchema, NewsletterFormSchema } from '@/lib/schemas'
import ContactFormEmail from '@/emails/contact-form-email'

type ContactFormInputs = z.infer<typeof ContactFormSchema>
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>
const resend = new Resend(process.env.RESEND_API_KEY)

async function checkRecaptcha(recaptcha: string): Promise<boolean> {
  const response = await fetch(
    'https://www.google.com/recaptcha/api/siteverify',
    {
      method: 'POST',
      headers: { 'Content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: process.env.RECAPTCHA_SECRET!,
        response: recaptcha
      })
    }
  ).then(res => res.json())

  if (!response.success) {
    throw new Error('Failed to validate captcha')
  }

  return response.success
}

export async function sendEmail(ContactFormInput: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(ContactFormInput)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message, captcha } = result.data
    checkRecaptcha(captcha)

    const { data, error } = await resend.emails.send({
      from: `${process.env.CONTACT_SENDER_NAME} <${process.env.CONTACT_SENDER_EMAIL}>`,
      to: [
        `${process.env.CONTACT_RECIPIENT_NAME} <${process.env.CONTACT_RECIPIENT_EMAIL}>`
      ],
      subject: '[Tyloo.fr] Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message })
    })

    if (!data || error) {
      throw new Error('Failed to send email')
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}

export async function subscribe(newwsletterFormInput: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(newwsletterFormInput)

  if (result.error) {
    return { error: result.error.format() }
  }

  try {
    const { email, captcha } = result.data
    checkRecaptcha(captcha)

    const { data, error } = await resend.contacts.create({
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
      email: email
    })

    if (!data || error) {
      throw new Error('Failed to subscribe')
    }

    // TODO: Send a welcome email

    return { success: true }
  } catch (error) {
    return { error }
  }
}
