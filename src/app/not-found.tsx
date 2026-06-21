import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="pl">
      <body>
        <main className="section-container flex min-h-screen flex-col items-center justify-center gap-6 text-center">
          <p className="h900 text-primary100">404</p>
          <h1 className="h500">Nie znaleziono strony</h1>
          <p className="body-large text-gray60">
            Strona, której szukasz, nie istnieje lub została przeniesiona.
          </p>
          <Link
            href="/pl"
            className="h300 rounded-[8px] bg-primary100 px-6 py-3 text-white transition-colors hover:bg-buttonHover"
          >
            Wróć na stronę główną
          </Link>
        </main>
      </body>
    </html>
  )
}
