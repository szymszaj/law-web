import { cn } from '@/utils/cn'

export type SectionTone = 'cream' | 'sand' | 'dark'

type SectionProps = {
  id?: string
  tone?: SectionTone
  className?: string
  containerClassName?: string
  children: React.ReactNode
}

const toneClasses: Record<SectionTone, string> = {
  cream: 'bg-cream text-text',
  sand: 'bg-sand text-text',
  dark: 'bg-ink text-on-dark',
}

// Spójny wrapper sekcji: pełnoekranowe tło + wyśrodkowany kontener.
export const Section = ({
  id,
  tone = 'cream',
  className,
  containerClassName,
  children,
}: SectionProps) => (
  <section
    id={id}
    className={cn(toneClasses[tone], id && 'scroll-mt-24', className)}
  >
    <div className={cn('section-container', containerClassName)}>{children}</div>
  </section>
)

export default Section
