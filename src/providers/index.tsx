'use client'

import { store } from '@/store'
import { Provider as StoreProvider } from 'jotai'
import React from 'react'

import { BreakpointsProvider } from '@/contexts/breakpoints'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <StoreProvider store={store}>
      <BreakpointsProvider>
        <div>{children}</div>
      </BreakpointsProvider>
    </StoreProvider>
  )
}
