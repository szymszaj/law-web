'use client'

import { cn } from '@/utils/cn'

import { FaqEntry } from './types'

type FaqItemProps = FaqEntry & {
  isOpen: boolean
  onToggle: () => void
}

export const FaqItem = ({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) => (
  <div className="border-b border-line">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="flex w-full items-center justify-between gap-6 py-6 text-left"
    >
      <span className="h400 text-ink">{question}</span>
      <span
        className={cn(
          'flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-all duration-300',
          isOpen
            ? 'rotate-45 border-gold bg-gold text-cream'
            : 'group-hover:border-gold'
        )}
      >
        +
      </span>
    </button>

    <div
      className={cn(
        'grid transition-all duration-400 ease-out',
        isOpen
          ? 'grid-rows-[1fr] pb-6 opacity-100'
          : 'grid-rows-[0fr] opacity-0'
      )}
    >
      <div className="overflow-hidden">
        <p className="body-large max-w-2xl text-muted">{answer}</p>
      </div>
    </div>
  </div>
)

export default FaqItem
