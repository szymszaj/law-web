'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { Button } from '@/components/atoms/Button'

import { siteContent } from '@/data/site'

import { cn } from '@/utils/cn'

const { brand, nav } = siteContent

const NavLinks = ({
  onNavigate,
  className,
}: {
  onNavigate?: () => void
  className?: string
}) => (
  <>
    {nav.map((item) => (
      <a
        key={item.href}
        href={item.href}
        onClick={onNavigate}
        className={cn(
          'group relative w-fit text-ink transition-colors',
          className
        )}
      >
        {item.label}
        <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
      </a>
    ))}
  </>
)

const Brand = ({ onNavigate }: { onNavigate?: () => void }) => (
  <a href="#" onClick={onNavigate} className="flex flex-col leading-none">
    <span className="h500 text-ink">{brand.name}</span>
    <span className="body-small tracking-[0.18em] text-gold uppercase">
      {brand.suffix}
    </span>
  </a>
)

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-cream/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-5 py-4 lg:px-[60px]">
        <Brand />

        <nav className="hidden items-center gap-9 body-large lg:flex">
          <NavLinks />
        </nav>

        <div className="hidden lg:block">
          <Button href="#kontakt" size="small">
            Umów konsultację
          </Button>
        </div>

        <button
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <span
            className={cn(
              'h-0.5 w-6 bg-ink transition-all duration-300',
              menuOpen && 'translate-y-2 rotate-45'
            )}
          />
          <span
            className={cn(
              'h-0.5 w-6 bg-ink transition-all duration-300',
              menuOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'h-0.5 w-6 bg-ink transition-all duration-300',
              menuOpen && '-translate-y-2 -rotate-45'
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-line bg-cream lg:hidden"
          >
            <nav className="flex flex-col gap-5 px-5 py-8 h400">
              <NavLinks onNavigate={() => setMenuOpen(false)} />
              <Button href="#kontakt" onClick={() => setMenuOpen(false)}>
                Umów konsultację
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
