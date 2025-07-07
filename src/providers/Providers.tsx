'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { JSX, PropsWithChildren } from 'react'

const client = new QueryClient()

export function Providers({ children }: PropsWithChildren): JSX.Element {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
