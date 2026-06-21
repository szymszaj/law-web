import { useContext } from 'react'

import { BreakpointsContext } from '@/contexts/breakpoints'

export const useBreakpoint = () => useContext(BreakpointsContext)
