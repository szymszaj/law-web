import { Reveal } from '@/components/atoms/Reveal'

import { Section } from '@/components/molecules/Section'
import { SectionHeading } from '@/components/molecules/SectionHeading'

import { KnowledgeCard } from './KnowledgeCard'
import { KnowledgeProps } from './types'

export const Knowledge = ({
  eyebrow,
  title,
  description,
  articles,
}: KnowledgeProps) => (
  <Section id="wiedza" tone="dark">
    <SectionHeading
      eyebrow={eyebrow}
      title={title}
      description={description}
      tone="dark"
      className="mb-14"
    />

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article, i) => (
        <Reveal key={article.title} delay={(i % 3) * 0.08}>
          <KnowledgeCard {...article} />
        </Reveal>
      ))}
    </div>
  </Section>
)

export default Knowledge
