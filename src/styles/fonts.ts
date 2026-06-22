// https://nextjs.org/docs/app/api-reference/components/font
import { Fraunces, Manrope } from 'next/font/google'

export const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
})

export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
})

export const fonts = `${fraunces.variable} ${manrope.variable}`
