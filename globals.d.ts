/// <reference types="next" />
/// <reference types="next/types/global" />

declare module '*.svg' {
  import { FC, SVGProps } from 'react'

  export const ReactComponent: FC<
    SVGProps<SVGSVGElement> & {
      title?: string
    }
  >
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.avif' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}
