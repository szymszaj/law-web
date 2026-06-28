'use client'

import { useState } from 'react'

import { Section } from '@/components/molecules/Section'
import { SectionHeading } from '@/components/molecules/SectionHeading'

import { FaqItem } from './FaqItem'
import { FaqProps } from './types'

export const Faq = ({ eyebrow, title, description, items }: FaqProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" tone="sand">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div className="flex flex-col">
          {items.map((item, i) => (
            <FaqItem
              key={item.question}
              {...item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Faq
