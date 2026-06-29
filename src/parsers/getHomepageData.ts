import { AboutProps } from '@/components/organisms/About'
import { ContactProps } from '@/components/organisms/Contact'
import { FaqProps } from '@/components/organisms/Faq'
import { HeroProps } from '@/components/organisms/Hero'
import { KnowledgeProps } from '@/components/organisms/Knowledge'
import { ServicesProps } from '@/components/organisms/Services'

import { HomepageContent, homepageContent } from '@/data/homepage'
import { SiteContent, siteContent } from '@/data/site'

// Parser mapuje treść (pliki danych) na propsy komponentów.
// Komponenty są czysto prezentacyjne — całość treści żyje w @/data.
// W przyszłości źródło (`content`, `site`) można podmienić np. na CMS.
export const getHomepageData = (
  content: HomepageContent = homepageContent,
  site: SiteContent = siteContent
) => {
  const HERO_DATA: HeroProps = {
    eyebrow: content.hero.eyebrow,
    title: content.hero.title,
    titleAccent: content.hero.titleAccent,
    subtitle: content.hero.subtitle,
    primaryBtn: {
      label: content.hero.primaryButton.label,
      href: content.hero.primaryButton.url,
    },
    secondaryBtn: {
      label: content.hero.secondaryButton.label,
      href: content.hero.secondaryButton.url,
    },
    stats: content.hero.stats,
  }

  const ABOUT_DATA: AboutProps = content.about

  const SERVICES_DATA: ServicesProps = content.services

  const KNOWLEDGE_DATA: KnowledgeProps = content.knowledge

  const FAQ_DATA: FaqProps = content.faq

  const CONTACT_DATA: ContactProps = {
    ...content.contact,
    details: site.contact,
  }

  return {
    HERO_DATA,
    ABOUT_DATA,
    SERVICES_DATA,
    KNOWLEDGE_DATA,
    FAQ_DATA,
    CONTACT_DATA,
  }
}
