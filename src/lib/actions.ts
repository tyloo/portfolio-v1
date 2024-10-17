import { z } from 'zod'
import { ContactFormSchema } from './schemas'

type ContactFormInputs = z.infer<typeof ContactFormSchema>

export async function sendEmail(data: ContactFormInputs) {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    return { error: true }
  }

  return { error: false }
}
