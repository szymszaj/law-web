import React from 'react'

import { cn } from '@/utils/cn'

import { Link } from '../Link'
import { ButtonVariant } from './types'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  scrollTop?: boolean
  href?: string
  size?: 'small' | 'medium'
  variant?: ButtonVariant
  Icon?: React.ElementType | string
  iconDirection?: 'left' | 'right'
}

const Button = ({
  children,
  className = '',
  type = 'button',
  size = 'medium',
  onClick,
  href,
  Icon,
  iconDirection = 'left',
  variant = ButtonVariant.PRIMARY,
  disabled,
  ...rest
}: ButtonProps) => {
  const hasText = React.Children.count(children) > 0

  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-[8px] transition-all duration-200 cursor-pointer outline-none w-fit border',
    iconDirection === 'left' ? 'flex-row' : 'flex-row-reverse',

    hasText
      ? size === 'medium'
        ? 'px-[23px] py-[11px] h300 gap-3 h-12'
        : 'px-[19px] py-[9px] h200 gap-2 h-10'
      : size === 'medium'
        ? 'p-[11px]'
        : 'p-[9px]',

    disabled && 'bg-gray05! text-gray60! cursor-not-allowed border-transparent'
  )

  const getVariantClasses = () => {
    if (disabled) return baseClasses

    switch (variant) {
      case ButtonVariant.SECONDARY:
        return cn(
          baseClasses,
          'bg-primary0 text-primary50 border border-transparent hover:border-primary0 hover:border-primary50 '
        )
      case ButtonVariant.PRIMARY:
      default:
        return cn(
          baseClasses,
          'bg-primary100 text-white border border-primary100 hover:border-buttonHover hover:bg-buttonHover '
        )
    }
  }

  const buttonClassName = cn(getVariantClasses(), className)
  const iconSize = size === 'medium' ? 20 : 16

  const renderContent = () => {
    const isComponent = Icon && typeof Icon !== 'string'
    const isStringPath = typeof Icon === 'string'

    const iconWrapperClasses = 'p-0.5 flex items-center justify-center shrink-0'

    return (
      <>
        {isComponent && (
          <div className={iconWrapperClasses}>
            <Icon
              width={iconSize}
              height={iconSize}
              className="transition-colors"
              fill="currentColor"
            />
          </div>
        )}

        {isStringPath && (
          <div className={iconWrapperClasses}>
            <img
              src={Icon}
              alt=""
              style={{ width: iconSize, height: iconSize }}
              className="object-contain"
            />
          </div>
        )}

        {hasText && (
          <span className="leading-none" suppressHydrationWarning>
            {children}
          </span>
        )}
      </>
    )
  }

  const commonProps = {
    className: buttonClassName,
    onClick,
    ...rest,
  }

  if (href) {
    return (
      <Link to={href} {...(commonProps as any)}>
        {renderContent()}
      </Link>
    )
  }

  return (
    <button type={type} disabled={disabled} {...commonProps}>
      {renderContent()}
    </button>
  )
}

export default Button
