import { Link } from '@/components/atoms/Link'

import { Article } from './types'

export const KnowledgeCard = ({
  category,
  title,
  excerpt,
  date,
  readingTime,
  url,
}: Article) => (
  <Link
    to={url}
    className="group relative flex flex-col gap-5 rounded-2xl border border-line-dark bg-ink-soft p-8 transition-colors duration-300 hover:border-gold"
  >
    <div className="flex items-center justify-between gap-4">
      <span className="eyebrow text-gold">{category}</span>
      <span className="body-small text-on-dark-muted">
        {date} · {readingTime}
      </span>
    </div>

    <h3 className="h500 text-on-dark transition-colors duration-300 group-hover:text-gold-soft">
      {title}
    </h3>

    <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr]">
      <div className="overflow-hidden">
        <p className="body-medium text-on-dark-muted">{excerpt}</p>
      </div>
    </div>

    <span className="mt-auto flex items-center gap-2 pt-2 h200 text-on-dark">
      Czytaj artykuł
      <span className="transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </span>
  </Link>
)

export default KnowledgeCard
