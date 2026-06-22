import type { Transition, Variants } from 'motion/react'

export const EASE = [0.16, 1, 0.3, 1] as const
export const DURATION = 0.7

export const baseTransition: Transition = {
  duration: DURATION,
  ease: EASE,
}

export const viewport = { once: true, margin: '-80px' } as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: baseTransition },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: baseTransition },
}

export const stagger = (
  staggerChildren = 0.12,
  delayChildren = 0.05
): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})
