import { Reveal } from '@/components/atoms/Reveal'

import { Section } from '@/components/molecules/Section'

import { AboutProps } from './types'

export const About = ({
  eyebrow,
  title,
  lead,
  paragraphs,
  values,
}: AboutProps) => (
  <Section id="o-nas" tone="sand">
    <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
      <div className="flex flex-col gap-6">
        <Reveal className="flex flex-col gap-4">
          <span className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
          </span>
          <h2 className="h700 text-ink">{title}</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="subtitle text-ink">{lead}</p>
        </Reveal>

        <div className="flex flex-col gap-4">
          {paragraphs.map((paragraph, i) => (
            <Reveal key={paragraph} delay={0.1 + i * 0.05}>
              <p className="body-large text-muted">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {values.map((value, i) => (
          <Reveal
            key={value.title}
            delay={i * 0.08}
            className="flex h-full flex-col gap-2 bg-cream p-7"
          >
            <span className="h300 text-cognac">0{i + 1}</span>
            <h3 className="h500 text-ink">{value.title}</h3>
            <p className="body-medium text-muted">{value.description}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
)

export default About
