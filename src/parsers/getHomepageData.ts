import { HeroProps } from '@/components/organisms/Hero'

import { HomepageContent, homepageContent } from '@/data/homepage'

export const getHomepageData = (data: HomepageContent = homepageContent) => {
  const HERO_DATA: HeroProps = {
    title: data.hero.title,
    subtitle: data.hero.subtitle,
    features: data.hero.features,
    primaryBtn: {
      label: data.hero.primaryButton.label,
      href: data.hero.primaryButton.url,
    },
    secondaryBtn: {
      label: data.hero.secondaryButton.label,
      href: data.hero.secondaryButton.url,
    },
  }

  return {
    HERO_DATA,
  }
}
