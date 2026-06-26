'use client'

import { motion, type Variants } from 'motion/react'

import { EASE, DURATION, viewport } from '@/utils/animations'

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
}

const variants: Variants = {
  hidden: ({ y }: { y: number }) => ({ opacity: 0, y }),
  show: ({ delay }: { delay: number }) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE, delay },
  }),
}

// Reusable scroll-reveal. Animacja "pojawiania się" przy wejściu w viewport.
export const Reveal = ({ children, className, delay = 0, y = 24 }: RevealProps) => (
  <motion.div
    className={className}
    custom={{ delay, y }}
    variants={variants}
    initial="hidden"
    whileInView="show"
    viewport={viewport}
  >
    {children}
  </motion.div>
)

export default Reveal
