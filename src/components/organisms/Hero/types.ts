type Cta = { label: string; href?: string }

export type HeroProps = {
  eyebrow: string
  title: string
  titleAccent: string
  subtitle: string
  primaryBtn: Cta
  secondaryBtn: Cta
  stats: { value: string; label: string }[]
}
