import { ILocale } from '@/i18n/types'
import { getHomepageData } from '@/parsers/getHomepageData'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

import { Hero } from '@/components/organisms/Hero'

import { generateSeoMetadata } from '@/utils/generateSeoMetadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return generateSeoMetadata({
    title: 'Kancelaria — profesjonalna pomoc prawna',
    description:
      'Doradztwo prawne i reprezentacja dla klientów indywidualnych i biznesowych.',
    keywords: 'kancelaria, prawnik, adwokat, radca prawny, porada prawna',
    slug: `/${locale}/`,
    locale: locale as ILocale,
  })
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  setRequestLocale(locale)

  const { HERO_DATA } = getHomepageData()

  return (
    <>
      <Hero {...HERO_DATA} />
    </>
  )
}
