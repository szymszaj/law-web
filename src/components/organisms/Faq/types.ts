export type FaqEntry = {
  question: string
  answer: string
}

export type FaqProps = {
  eyebrow: string
  title: string
  description: string
  items: FaqEntry[]
}
