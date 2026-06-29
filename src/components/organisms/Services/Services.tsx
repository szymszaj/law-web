import { Reveal } from '@/components/atoms/Reveal'

import { Section } from '@/components/molecules/Section'
import { SectionHeading } from '@/components/molecules/SectionHeading'

import { ServiceCard } from './ServiceCard'
import { ServicesProps } from './types'

export const Services = ({
  eyebrow,
  title,
  description,
  items,
}: ServicesProps) => (
  <Section id="specjalizacje" tone="cream">
    <SectionHeading
      eyebrow={eyebrow}
      title={title}
      description={description}
      className="mb-14"
    />

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={(i % 3) * 0.08}>
          <ServiceCard {...item} index={i} />
        </Reveal>
      ))}
    </div>
  </Section>
)

export default Services
