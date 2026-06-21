'use client'

import { useLocale } from 'next-intl'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

export const LocalLink = NextLink
export const ExternalLink: React.FC<
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>
> = ({ children, ...props }) => <a {...props}>{children}</a>

type LinkProps = {
  to: string | undefined
  className?: string
  onClick?: () => void
  style?: React.CSSProperties
}
const INTERNAL_LINK_START = ['/', '#', './']
export const Link: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  to,
  ...props
}) => {
  const locale = useLocale()

  let link = to ?? '#'

  if (!INTERNAL_LINK_START.some((start) => link?.startsWith(start))) {
    return (
      <ExternalLink
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </ExternalLink>
    )
  }

  if (
    link !== '#' &&
    typeof locale === 'string' &&
    !link.includes(`/${locale}/`) &&
    !link.startsWith(`/${locale}/`) &&
    !link.startsWith('tel:') &&
    !link.startsWith('mailto:')
  ) {
    link = `/${locale}/${link.replace(/^\/+/, '')}`
  }

  return (
    <NextLink href={link} {...props}>
      {children}
    </NextLink>
  )
}

export const Email: React.FC<PropsWithChildren<{ email: string }>> = ({
  children,
  email,
}) => <Link to={`mailto:${email}`}>{children}</Link>

export const Phone: React.FC<PropsWithChildren<{ phone: string }>> = ({
  children,
  phone,
}) => <Link to={`tel:${phone.replaceAll(/\s/g, '')}`}>{children}</Link>
