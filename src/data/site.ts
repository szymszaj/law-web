export type SiteContent = {
  brand: { name: string; suffix: string }
  nav: { label: string; href: string }[]
  contact: {
    phone: string
    email: string
    address: string[]
    hours: string
  }
  footer: {
    tagline: string
    rights: string
    privacy: { label: string; href: string }
  }
}

export const siteContent: SiteContent = {
  brand: { name: 'Kowalski', suffix: 'Kancelaria Adwokacka' },
  nav: [
    { label: 'O kancelarii', href: '#o-nas' },
    { label: 'Specjalizacje', href: '#specjalizacje' },
    { label: 'Wiedza', href: '#wiedza' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  contact: {
    phone: '+48 600 100 200',
    email: 'kontakt@kancelaria-kowalski.pl',
    address: ['ul. Mokotowska 12/4', '00-561 Warszawa'],
    hours: 'Pon.–Pt. 9:00–18:00',
  },
  footer: {
    tagline:
      'Doradztwo prawne i reprezentacja dla klientów indywidualnych oraz biznesu.',
    rights: 'Wszelkie prawa zastrzeżone',
    privacy: { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
  },
}
