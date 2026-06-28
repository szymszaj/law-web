import { Email, Phone } from '@/components/atoms/Link'
import { Reveal } from '@/components/atoms/Reveal'

import { Section } from '@/components/molecules/Section'

import { ContactForm } from './ContactForm'
import { ContactProps } from './types'

export const Contact = ({
  eyebrow,
  title,
  description,
  formNote,
  submitLabel,
  details,
}: ContactProps) => (
  <Section id="kontakt" tone="dark">
    <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div className="flex flex-col gap-8">
        <Reveal className="flex flex-col gap-4">
          <span className="eyebrow flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold" />
            {eyebrow}
          </span>
          <h2 className="h700 text-on-dark">{title}</h2>
          <p className="body-large text-on-dark-muted">{description}</p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col gap-6 border-t border-line-dark pt-8"
        >
          <div className="flex flex-col gap-1">
            <span className="eyebrow text-on-dark-muted">Telefon</span>
            <Phone phone={details.phone}>
              <span className="h500 text-on-dark transition-colors hover:text-gold-soft">
                {details.phone}
              </span>
            </Phone>
          </div>

          <div className="flex flex-col gap-1">
            <span className="eyebrow text-on-dark-muted">E-mail</span>
            <Email email={details.email}>
              <span className="h500 text-on-dark transition-colors hover:text-gold-soft">
                {details.email}
              </span>
            </Email>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-1">
              <span className="eyebrow text-on-dark-muted">Adres</span>
              <address className="body-large not-italic text-on-dark">
                {details.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <div className="flex flex-col gap-1">
              <span className="eyebrow text-on-dark-muted">Godziny</span>
              <span className="body-large text-on-dark">{details.hours}</span>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <ContactForm note={formNote} submitLabel={submitLabel} />
      </Reveal>
    </div>
  </Section>
)

export default Contact
