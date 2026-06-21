import React from 'react'

import { Footer } from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Header />

      {children}

      <Footer />
    </div>
  )
}
