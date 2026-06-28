'use client'

import { FormEvent } from 'react'

import { Button } from '@/components/atoms/Button'
import { Input, Textarea } from '@/components/atoms/Input'

type ContactFormProps = {
  note: string
  submitLabel: string
}

export const ContactForm = ({ note, submitLabel }: ContactFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: integracja wysyłki (mailer / API)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-line bg-cream p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Imię i nazwisko"
          name="name"
          placeholder="Jan Kowalski"
          required
        />
        <Input
          label="Telefon"
          name="phone"
          type="tel"
          placeholder="+48 600 100 200"
        />
      </div>

      <Input
        label="E-mail"
        name="email"
        type="email"
        placeholder="jan@example.pl"
        required
      />

      <Textarea
        label="Wiadomość"
        name="message"
        placeholder="Opisz krótko swoją sprawę…"
        required
      />

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="body-small max-w-xs text-muted">{note}</p>
        <Button type="submit">{submitLabel}</Button>
      </div>
    </form>
  )
}

export default ContactForm
