'use client'

import { useTranslations } from 'next-intl'

import { Link } from '@/components/atoms/Link'

import { navLinks } from '@/data/navigation'

export const Footer = () => {
  const t = useTranslations()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray05 bg-white">
      <div className="section-container flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-3">
          <span className="h500 text-primary100">Kancelaria</span>
          <p className="body-medium max-w-xs text-gray60">
            Profesjonalne doradztwo prawne i reprezentacja na każdym etapie
            sprawy.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="body-medium text-gray80 transition-colors hover:text-primary100"
            >
              {t(`nav.${link.label}`)}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-gray05">
        <div className="section-container flex flex-col gap-2 !py-6 text-gray60 sm:flex-row sm:items-center sm:justify-between">
          <span className="body-small">
            © {year} Kancelaria. {t('footer.rights')}.
          </span>
          <Link
            to="/polityka-prywatnosci"
            className="body-small transition-colors hover:text-primary100"
          >
            {t('footer.privacyPolicy')}
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
