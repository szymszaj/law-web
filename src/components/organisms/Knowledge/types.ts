export type Article = {
  category: string
  title: string
  excerpt: string
  date: string
  readingTime: string
  url: string
}

export type KnowledgeProps = {
  eyebrow: string
  title: string
  description: string
  articles: Article[]
}
