'use client'

import { useTranslations } from 'next-intl'

import { Button } from '@/components/atoms/Button'
import { Link } from '@/components/atoms/Link'

import { navLinks } from '@/data/navigation'

export const Header = () => {
  const t = useTranslations('nav')

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray05 bg-white/80 backdrop-blur-md">
      <div className="section-container flex items-center justify-between !py-4">
        <Link to="/" className="h500 text-primary100">
          Kancelaria
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="body-large text-gray80 transition-colors hover:text-primary100"
            >
              {t(link.label)}
            </Link>
          ))}
        </nav>

        <Button href="/kontakt" size="small" className="hidden lg:inline-flex">
          {t('contact')}
        </Button>
      </div>
    </header>
  )
}

export default Header
