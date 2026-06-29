import { ILocale } from '@/i18n/types'
import { getHomepageData } from '@/parsers/getHomepageData'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'

import { About } from '@/components/organisms/About'
import { Contact } from '@/components/organisms/Contact'
import { Faq } from '@/components/organisms/Faq'
import { Hero } from '@/components/organisms/Hero'
import { Knowledge } from '@/components/organisms/Knowledge'
import { Services } from '@/components/organisms/Services'

import { generateSeoMetadata } from '@/utils/generateSeoMetadata'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return generateSeoMetadata({
    title: 'Kancelaria Adwokacka Kowalski — profesjonalna pomoc prawna',
    description:
      'Doradztwo prawne i reprezentacja dla klientów indywidualnych oraz biznesu. Prawo gospodarcze, cywilne, rodzinne i karne.',
    keywords: 'kancelaria, adwokat, radca prawny, porada prawna, prawnik Warszawa',
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

  const {
    HERO_DATA,
    ABOUT_DATA,
    SERVICES_DATA,
    KNOWLEDGE_DATA,
    FAQ_DATA,
    CONTACT_DATA,
  } = getHomepageData()

  return (
    <>
      <Hero {...HERO_DATA} />
      <About {...ABOUT_DATA} />
      <Services {...SERVICES_DATA} />
      <Knowledge {...KNOWLEDGE_DATA} />
      <Faq {...FAQ_DATA} />
      <Contact {...CONTACT_DATA} />
    </>
  )
}
