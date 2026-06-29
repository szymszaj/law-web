export type HomepageContent = {
  hero: {
    eyebrow: string
    title: string
    titleAccent: string
    subtitle: string
    primaryButton: { label: string; url: string }
    secondaryButton: { label: string; url: string }
    stats: { value: string; label: string }[]
  }
  about: {
    eyebrow: string
    title: string
    lead: string
    paragraphs: string[]
    values: { title: string; description: string }[]
  }
  services: {
    eyebrow: string
    title: string
    description: string
    items: { title: string; description: string; points: string[] }[]
  }
  knowledge: {
    eyebrow: string
    title: string
    description: string
    articles: {
      category: string
      title: string
      excerpt: string
      date: string
      readingTime: string
      url: string
    }[]
  }
  faq: {
    eyebrow: string
    title: string
    description: string
    items: { question: string; answer: string }[]
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    formNote: string
    submitLabel: string
  }
}

export const homepageContent: HomepageContent = {
  hero: {
    eyebrow: 'Kancelaria adwokacka',
    title: 'Prawo po Twojej stronie,',
    titleAccent: 'na każdym etapie sprawy',
    subtitle:
      'Łączymy doświadczenie procesowe z indywidualnym podejściem. Doradzamy, negocjujemy i reprezentujemy klientów indywidualnych oraz biznes — skutecznie i z pełnym zaangażowaniem.',
    primaryButton: { label: 'Umów konsultację', url: '#kontakt' },
    secondaryButton: { label: 'Poznaj specjalizacje', url: '#specjalizacje' },
    stats: [
      { value: '15+', label: 'lat doświadczenia' },
      { value: '500+', label: 'prowadzonych spraw' },
      { value: '98%', label: 'zadowolonych klientów' },
    ],
  },
  about: {
    eyebrow: 'O kancelarii',
    title: 'Doświadczenie, któremu możesz zaufać',
    lead: 'Od ponad 15 lat wspieramy klientów w najważniejszych sprawach — od codziennych formalności po skomplikowane spory sądowe.',
    paragraphs: [
      'Naszą pracę opieramy na rzetelnej analizie, jasnej komunikacji i realnej trosce o interes klienta. Każdą sprawę traktujemy indywidualnie, dobierając strategię do konkretnej sytuacji, a nie do schematu.',
      'Działamy w pełnej transparentności — od pierwszej rozmowy wiesz, na czym stoisz, jakie masz opcje i jakie są realne koszty oraz szanse powodzenia.',
    ],
    values: [
      {
        title: 'Indywidualne podejście',
        description: 'Strategia dopasowana do Twojej sprawy, nie odwrotnie.',
      },
      {
        title: 'Jasna komunikacja',
        description:
          'Bez prawniczego żargonu — tłumaczymy zrozumiale i konkretnie.',
      },
      {
        title: 'Skuteczność',
        description:
          'Koncentrujemy się na realnym rozwiązaniu, nie na przeciąganiu sprawy.',
      },
      {
        title: 'Pełna dyskrecja',
        description: 'Twoje sprawy pozostają wyłącznie Twoje.',
      },
    ],
  },
  services: {
    eyebrow: 'Specjalizacje',
    title: 'Czym się zajmujemy',
    description:
      'Kompleksowa obsługa prawna w kluczowych obszarach — dla osób prywatnych i przedsiębiorstw.',
    items: [
      {
        title: 'Prawo gospodarcze',
        description:
          'Bieżąca obsługa firm, umowy handlowe, spory między przedsiębiorcami i windykacja należności.',
        points: ['Umowy B2B', 'Spory gospodarcze', 'Obsługa spółek'],
      },
      {
        title: 'Prawo cywilne',
        description:
          'Sprawy o zapłatę, odszkodowania, nieruchomości oraz ochrona dóbr osobistych.',
        points: ['Odszkodowania', 'Nieruchomości', 'Sprawy o zapłatę'],
      },
      {
        title: 'Prawo rodzinne',
        description:
          'Rozwody, podział majątku, alimenty oraz sprawy dotyczące opieki nad dziećmi.',
        points: ['Rozwody', 'Podział majątku', 'Alimenty'],
      },
      {
        title: 'Prawo karne',
        description:
          'Obrona na każdym etapie postępowania oraz reprezentacja pokrzywdzonych.',
        points: ['Obrona', 'Postępowanie', 'Reprezentacja'],
      },
      {
        title: 'Prawo pracy',
        description:
          'Spory pracownicze, umowy, rozwiązanie stosunku pracy i mobbing.',
        points: ['Spory pracownicze', 'Umowy', 'Mobbing'],
      },
      {
        title: 'Obsługa firm',
        description:
          'Stałe doradztwo prawne, RODO, regulaminy i kompleksowe bezpieczeństwo prawne biznesu.',
        points: ['Stałe doradztwo', 'RODO', 'Regulaminy'],
      },
    ],
  },
  knowledge: {
    eyebrow: 'Strefa wiedzy',
    title: 'Warto wiedzieć',
    description:
      'Praktyczne artykuły i komentarze prawne — wiedza podana w przystępny sposób.',
    articles: [
      {
        category: 'Prawo rodzinne',
        title: 'Rozwód krok po kroku — czego się spodziewać',
        excerpt:
          'Od pozwu po wyrok — wyjaśniamy przebieg sprawy rozwodowej, niezbędne dokumenty i najczęstsze pułapki.',
        date: '12.05.2026',
        readingTime: '6 min',
        url: '#wiedza',
      },
      {
        category: 'Prawo gospodarcze',
        title: 'Umowa B2B — na co zwrócić uwagę przed podpisem',
        excerpt:
          'Kluczowe klauzule, które chronią Twój biznes, oraz zapisy, które warto negocjować.',
        date: '28.04.2026',
        readingTime: '5 min',
        url: '#wiedza',
      },
      {
        category: 'Prawo cywilne',
        title: 'Odszkodowanie po wypadku — jak skutecznie dochodzić praw',
        excerpt:
          'Jakie roszczenia Ci przysługują, jak udokumentować szkodę i w jakim terminie działać.',
        date: '10.04.2026',
        readingTime: '7 min',
        url: '#wiedza',
      },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Najczęstsze pytania',
    description:
      'Zebraliśmy odpowiedzi na pytania, które klienci zadają najczęściej.',
    items: [
      {
        question: 'Jak wygląda pierwsza konsultacja?',
        answer:
          'Podczas pierwszego spotkania analizujemy Twoją sytuację, przedstawiamy możliwe rozwiązania oraz realne szanse i koszty. Otrzymujesz konkretny plan działania bez zobowiązań.',
      },
      {
        question: 'Ile kosztują usługi kancelarii?',
        answer:
          'Koszt zależy od rodzaju i stopnia złożoności sprawy. Zawsze ustalamy wynagrodzenie z góry i transparentnie — bez ukrytych opłat. Możliwe są rozliczenia ryczałtowe lub godzinowe.',
      },
      {
        question: 'Czy prowadzicie sprawy w całej Polsce?',
        answer:
          'Tak. Reprezentujemy klientów przed sądami w całym kraju, a wiele spraw prowadzimy również zdalnie — bez konieczności osobistych wizyt.',
      },
      {
        question: 'W jakim czasie otrzymam odpowiedź?',
        answer:
          'Na zapytania odpowiadamy zwykle w ciągu 24 godzin roboczych. W sprawach pilnych prosimy o kontakt telefoniczny.',
      },
    ],
  },
  contact: {
    eyebrow: 'Kontakt',
    title: 'Porozmawiajmy o Twojej sprawie',
    description:
      'Opisz krótko swoją sytuację — odezwiemy się i zaproponujemy termin konsultacji.',
    formNote:
      'Wysyłając formularz akceptujesz przetwarzanie danych w celu kontaktu.',
    submitLabel: 'Wyślij wiadomość',
  },
}
