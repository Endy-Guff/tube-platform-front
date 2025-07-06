import { MainLayout } from '@components'
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
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
