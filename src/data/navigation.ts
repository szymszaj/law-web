export type NavLink = {
  href: string
  label: string
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'mainPage' },
  { href: '/o-kancelarii', label: 'about' },
  { href: '/specjalizacje', label: 'practiceAreas' },
  { href: '/zespol', label: 'team' },
  { href: '/kontakt', label: 'contact' },
]
