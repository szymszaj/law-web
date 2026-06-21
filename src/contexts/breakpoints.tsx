import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react'

import { keys } from '@/utils/object'

import {
  Breakpoint as BreakpointType,
  breakpoints as themeBreakpoints,
} from '@/styles/theme'

type BreakpointsBoolean = {
  [key in BreakpointType]: boolean
}
type BreakpointsState = BreakpointsBoolean & {
  activeBreakpoint: BreakpointType
}
type BreakpointsContextType = BreakpointsState

const BASE_BREAKPOINT: BreakpointType = 'base'

const DEFAULT_STATE: BreakpointsState = {
  base: true,
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
  xl2: false,
  xxl: false,
  xl3: false,
  activeBreakpoint: BASE_BREAKPOINT,
}

export const BreakpointsContext = createContext<BreakpointsContextType>({
  ...DEFAULT_STATE,
})

const getBreakpoints = () => {
  const isSSR = typeof window === `undefined`
  const bps: Partial<BreakpointsBoolean> = {}

  const breakpointKeys = keys(themeBreakpoints)
  breakpointKeys.forEach((key) => {
    const query = `(min-width: ${themeBreakpoints[key]}px)`
    const matches = isSSR || window.matchMedia(query).matches
    bps[key] = matches
  })

  return bps as BreakpointsBoolean
}

export const BreakpointsProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [breakpoints, setBreakpoints] = useState<BreakpointsBoolean>(() =>
    getBreakpoints()
  )

  const activeBP = useMemo(
    () =>
      keys(breakpoints)
        .slice()
        .reverse()
        .find((key) => breakpoints[key]) || BASE_BREAKPOINT,
    [breakpoints]
  )

  useEffect(() => {
    const listener = () => setBreakpoints(getBreakpoints())

    window.addEventListener('resize', listener)
    window.addEventListener('DOMContentLoaded', listener)
    return () => {
      window?.removeEventListener('resize', listener)
      window?.removeEventListener('DOMContentLoaded', listener)
    }
  }, [])

  const providerValues = useMemo(
    () => ({ ...breakpoints, activeBreakpoint: activeBP }),
    [activeBP, breakpoints]
  )

  return (
    <BreakpointsContext.Provider value={providerValues}>
      {children}
    </BreakpointsContext.Provider>
  )
}

export default BreakpointsContext
