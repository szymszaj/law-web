import { Reveal } from '@/components/atoms/Reveal'

import { cn } from '@/utils/cn'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

// Spójny blok nagłówka sekcji (eyebrow + tytuł + opis) z animacją.
export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  className,
}: SectionHeadingProps) => {
  const isDark = tone === 'dark'

  return (
    <Reveal
      className={cn(
        'flex max-w-2xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="eyebrow flex items-center gap-3 text-gold">
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </span>
      )}

      <h2 className={cn('h700', isDark ? 'text-on-dark' : 'text-ink')}>
        {title}
      </h2>

      {description && (
        <p className={cn('body-large', isDark ? 'text-on-dark-muted' : 'text-muted')}>
          {description}
        </p>
      )}
    </Reveal>
  )
}

export default SectionHeading
