import { Providers } from '@providers/Providers'
import type { Metadata } from 'next'
import { SUSE } from 'next/font/google'

import './globals.scss'

const suse = SUSE({
  variable: '--font-suse-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: {
    absolute: 'Tube Platform',
    template: '%s | Tube Platform'
  },
  description: 'App for video watching'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${suse.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
