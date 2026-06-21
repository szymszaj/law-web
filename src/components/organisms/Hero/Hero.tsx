'use client'

import { motion } from 'motion/react'

import { Button } from '@/components/atoms/Button'
import { ButtonVariant } from '@/components/atoms/Button'

import { HeroProps } from './types'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export const Hero = ({
  title,
  subtitle,
  features,
  primaryBtn,
  secondaryBtn,
}: HeroProps) => {
  return (
    <section className="section-container flex min-h-[80vh] flex-col justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-3xl flex-col gap-6"
      >
        <motion.h1 variants={item} className="h800 text-gray100">
          {title}
        </motion.h1>

        <motion.p variants={item} className="subtitle max-w-2xl text-gray60">
          {subtitle}
        </motion.p>

        {features.length > 0 && (
          <motion.ul variants={item} className="flex flex-wrap gap-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="body-medium rounded-full bg-primary0 px-4 py-2 text-primary50"
              >
                {feature}
              </li>
            ))}
          </motion.ul>
        )}

        <motion.div variants={item} className="mt-2 flex flex-wrap gap-4">
          <Button href={primaryBtn.href}>{primaryBtn.label}</Button>
          <Button href={secondaryBtn.href} variant={ButtonVariant.SECONDARY}>
            {secondaryBtn.label}
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
