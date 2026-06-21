import { AppProviders } from '@/providers'
import { NextIntlClientProvider } from 'next-intl'

import { Layout } from '@/layouts/Layout'

import { fonts } from '@/styles/fonts'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={fonts}>
        <AppProviders>
          <NextIntlClientProvider>
            <Layout>{children}</Layout>
          </NextIntlClientProvider>
        </AppProviders>
      </body>
    </html>
  )
}
