import React, { ComponentProps, JSXElementConstructor } from 'react'

import { Breakpoint } from '@/styles/theme'

export type TypedOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type WithRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>

export type InferProps<
  T extends JSXElementConstructor<any> | keyof React.JSX.IntrinsicElements,
> = ComponentProps<T>

export type Transienty<T> = { [P in keyof T as `$${string & P}`]: T[P] }
export type BreakpointProps<T, R extends Breakpoint = 'base'> = WithRequired<
  Partial<Record<Breakpoint, T>>,
  R
>
export type BreakpointValue<T, R extends Breakpoint = 'base'> =
  | T
  | BreakpointProps<T, R>

export type RecursiveKeyOf<T> = T extends object
  ? { [K in keyof T]: K | RecursiveKeyOf<T[K]> }[keyof T]
  : never

export type WithId<T> = T & { id: string }
