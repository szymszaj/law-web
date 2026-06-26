import React from 'react'

import { cn } from '@/utils/cn'

import { Link } from '../Link'
import { ButtonVariant } from './types'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string
  size?: 'small' | 'medium'
  variant?: ButtonVariant
  Icon?: React.ElementType | string
  iconDirection?: 'left' | 'right'
}

const sizeClasses: Record<
  NonNullable<ButtonProps['size']>,
  { withText: string; iconOnly: string; text: string; icon: number }
> = {
  medium: { withText: 'h-12 px-7 gap-2.5', iconOnly: 'h-12 w-12', text: 'h300', icon: 18 },
  small: { withText: 'h-10 px-5 gap-2', iconOnly: 'h-10 w-10', text: 'h200', icon: 16 },
}

const variantClasses: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]:
    'bg-ink text-on-dark border border-ink hover:bg-cognac hover:border-cognac',
  [ButtonVariant.SECONDARY]:
    'bg-transparent text-ink border border-ink/30 hover:border-ink hover:bg-ink hover:text-on-dark',
  [ButtonVariant.LIGHT]:
    'bg-cream text-ink border border-cream hover:bg-gold-soft hover:border-gold-soft',
}

const Button = ({
  children,
  className = '',
  type = 'button',
  size = 'medium',
  href,
  Icon,
  iconDirection = 'right',
  variant = ButtonVariant.PRIMARY,
  disabled,
  ...rest
}: ButtonProps) => {
  const hasText = React.Children.count(children) > 0
  const s = sizeClasses[size]

  const classes = cn(
    'group inline-flex items-center justify-center rounded-full w-fit cursor-pointer outline-none',
    'transition-all duration-300 ease-out hover:-translate-y-0.5',
    iconDirection === 'left' ? 'flex-row' : 'flex-row-reverse',
    hasText ? s.withText : s.iconOnly,
    hasText && s.text,
    disabled
      ? 'pointer-events-none border-transparent bg-line text-muted'
      : variantClasses[variant],
    className
  )

  const renderIcon = () => {
    if (!Icon) return null
    const isComponent = typeof Icon !== 'string'

    return (
      <span className="flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
        {isComponent ? (
          <Icon width={s.icon} height={s.icon} fill="currentColor" />
        ) : (
          <img src={Icon} alt="" width={s.icon} height={s.icon} className="object-contain" />
        )}
      </span>
    )
  }

  const content = (
    <>
      {renderIcon()}
      {hasText && (
        <span className="leading-none" suppressHydrationWarning>
          {children}
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <Link to={href} className={classes} {...(rest as any)}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} {...rest}>
      {content}
    </button>
  )
}

export default Button
