import { Metadata } from 'next'

import { ILocale } from '@/i18n/types'

type GenerateSeoMetadataArgs = {
  title: string
  description?: string
  keywords?: string
  slug?: string
  locale: ILocale
}

export const generateSeoMetadata = ({
  title,
  description,
  keywords,
  slug,
  locale,
}: GenerateSeoMetadataArgs): Metadata => {
  return {
    title,
    description,
    keywords,
    alternates: slug ? { canonical: slug } : undefined,
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
    },
  }
}
