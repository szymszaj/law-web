'use client'

import { motion } from 'motion/react'

import { Button, ButtonVariant } from '@/components/atoms/Button'

import { fadeUp, stagger } from '@/utils/animations'

import { HeroProps } from './types'

export const Hero = ({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  primaryBtn,
  secondaryBtn,
  stats,
}: HeroProps) => (
  <section className="relative overflow-hidden bg-cream">
    {/* delikatny akcent tła */}
    <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-gold-soft/20 blur-3xl" />

    <div className="section-container relative flex min-h-[88vh] flex-col justify-center">
      <motion.div
        variants={stagger(0.14, 0.1)}
        initial="hidden"
        animate="show"
        className="flex max-w-4xl flex-col gap-7"
      >
        <motion.span
          variants={fadeUp}
          className="eyebrow flex items-center gap-3 text-gold"
        >
          <span className="h-px w-10 bg-gold" />
          {eyebrow}
        </motion.span>

        <motion.h1 variants={fadeUp} className="h900 text-ink">
          {title}{' '}
          <span className="text-cognac italic">{titleAccent}</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="subtitle max-w-2xl text-muted">
          {subtitle}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-2 flex flex-wrap gap-4">
          <Button href={primaryBtn.href}>{primaryBtn.label}</Button>
          <Button href={secondaryBtn.href} variant={ButtonVariant.SECONDARY}>
            {secondaryBtn.label}
          </Button>
        </motion.div>

        <motion.dl
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-line pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <dt className="h600 text-ink">{stat.value}</dt>
              <dd className="body-medium text-muted">{stat.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </div>
  </section>
)

export default Hero
