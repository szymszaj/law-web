import Link from 'next/link'

export default function NotFound() {
  return (
    <html lang="pl">
      <body className="bg-cream">
        <main className="section-container flex min-h-screen flex-col items-center justify-center gap-6 text-center">
          <p className="h900 text-cognac">404</p>
          <h1 className="h500 text-ink">Nie znaleziono strony</h1>
          <p className="body-large text-muted">
            Strona, której szukasz, nie istnieje lub została przeniesiona.
          </p>
          <Link
            href="/pl"
            className="h300 rounded-full bg-ink px-7 py-3 text-on-dark transition-colors hover:bg-cognac"
          >
            Wróć na stronę główną
          </Link>
        </main>
      </body>
    </html>
  )
}
