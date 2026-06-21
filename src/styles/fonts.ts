// https://nextjs.org/docs/app/api-reference/components/font
import { Manrope } from 'next/font/google'

export const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
  variable: '--font-manrope',
})

export const fonts = manrope.variable
