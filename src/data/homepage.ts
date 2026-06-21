// Statyczne źródło treści strony głównej.

export type HomepageContent = {
  hero: {
    title: string
    subtitle: string
    features: string[]
    primaryButton: { label: string; url: string }
    secondaryButton: { label: string; url: string }
  }
}

export const homepageContent: HomepageContent = {
  hero: {
    title: 'Skuteczna pomoc prawna, na której możesz polegać',
    subtitle:
      'Reprezentujemy klientów indywidualnych i biznesowych. Doradzamy, negocjujemy i bronimy Twoich interesów na każdym etapie sprawy.',
    features: [
      'Prawo gospodarcze',
      'Prawo cywilne',
      'Prawo rodzinne',
      'Obsługa firm',
    ],
    primaryButton: { label: 'Umów konsultację', url: '/kontakt' },
    secondaryButton: { label: 'Nasze specjalizacje', url: '/specjalizacje' },
  },
}
