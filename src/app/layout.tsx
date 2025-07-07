import { MainLayout } from '@components'
import { Providers } from '@providers/Providers'
import type { Metadata } from 'next'
import { SUSE } from 'next/font/google'

import './globals.scss'

const suse = SUSE({
  variable: '--font-suse-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Tube Platform',
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
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}
