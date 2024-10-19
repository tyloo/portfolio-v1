import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required.')
    .min(2, 'Must be at least 2 characters.'),
  email: z.string().email().min(1, 'Email is required.'),
  message: z.string().min(1, 'Message is required.'),
  captcha: z.string()
})

export const NewsletterFormSchema = z.object({
  email: z.string().email('Invalid email.'),
  captcha: z.string()
})
