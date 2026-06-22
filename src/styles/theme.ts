export const breakpoints = {
  base: 0,
  xs: 400,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1200,
  xl2: 1280,
  xxl: 1440,
  xl3: 1600,
} as const

export type Breakpoints = typeof breakpoints
export type Breakpoint = keyof Breakpoints

export const colors = {
  ink: '#181410',
  brown: '#4a3326',
  gold: '#a87e4b',
  cream: '#f6f1e9',
  black: '#000000',
  white: '#ffffff',
} as const

export type Colors = typeof colors
export type Color = keyof Colors

export const fonts = {
  size: '16px',
} as const

export type Fonts = typeof fonts

const theme = {
  breakpoints,
  colors,
  fonts,
}

export type Theme = typeof theme

export default theme
