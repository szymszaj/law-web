import { Email, Phone } from '@/components/atoms/Link'

import { siteContent } from '@/data/site'

const { brand, nav, contact, footer } = siteContent
const year = new Date().getFullYear()

export const Footer = () => (
  <footer className="bg-ink text-on-dark">
    <div className="section-container grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col leading-none">
          <span className="h500 text-on-dark">{brand.name}</span>
          <span className="body-small tracking-[0.18em] text-gold uppercase">
            {brand.suffix}
          </span>
        </div>
        <p className="body-medium max-w-sm text-on-dark-muted">
          {footer.tagline}
        </p>
      </div>

      <nav className="flex flex-col gap-3">
        <span className="eyebrow text-on-dark-muted">Nawigacja</span>
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="body-large text-on-dark transition-colors hover:text-gold-soft"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex flex-col gap-3">
        <span className="eyebrow text-on-dark-muted">Kontakt</span>
        <Phone phone={contact.phone}>
          <span className="body-large text-on-dark transition-colors hover:text-gold-soft">
            {contact.phone}
          </span>
        </Phone>
        <Email email={contact.email}>
          <span className="body-large text-on-dark transition-colors hover:text-gold-soft">
            {contact.email}
          </span>
        </Email>
        <address className="body-medium not-italic text-on-dark-muted">
          {contact.address.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </address>
      </div>
    </div>

    <div className="border-t border-line-dark">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-2 px-5 py-6 text-on-dark-muted sm:flex-row sm:items-center sm:justify-between lg:px-[60px]">
        <span className="body-small">
          © {year} {brand.name}. {footer.rights}.
        </span>
        <a
          href={footer.privacy.href}
          className="body-small transition-colors hover:text-gold-soft"
        >
          {footer.privacy.label}
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
