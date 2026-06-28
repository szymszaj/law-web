export type ContactDetails = {
  phone: string
  email: string
  address: string[]
  hours: string
}

export type ContactProps = {
  eyebrow: string
  title: string
  description: string
  formNote: string
  submitLabel: string
  details: ContactDetails
}
