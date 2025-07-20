'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, domAnimation } from 'framer-motion'
import { JSX, PropsWithChildren } from 'react'

const client = new QueryClient()

export function Providers({ children }: PropsWithChildren): JSX.Element {
  return (
    <QueryClientProvider client={client}>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </QueryClientProvider>
  )
}
