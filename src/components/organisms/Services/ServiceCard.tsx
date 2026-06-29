import { ServiceItem } from './types'

type ServiceCardProps = ServiceItem & { index: number }

export const ServiceCard = ({
  title,
  description,
  points,
  index,
}: ServiceCardProps) => (
  <article className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-line bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_24px_60px_-30px_rgba(24,20,16,0.3)]">
    <span className="absolute inset-x-0 top-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full" />

    <span className="h300 text-cognac">0{index + 1}</span>

    <div className="flex flex-col gap-3">
      <h3 className="h500 text-ink">{title}</h3>
      <p className="body-medium text-muted">{description}</p>
    </div>

    <ul className="mt-auto flex flex-wrap gap-2 pt-2">
      {points.map((point) => (
        <li
          key={point}
          className="body-small rounded-full border border-line px-3 py-1 text-ink/70 transition-colors group-hover:border-gold-soft"
        >
          {point}
        </li>
      ))}
    </ul>
  </article>
)

export default ServiceCard
