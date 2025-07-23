import { MainLayout } from '@components'
import { PropsWithChildren } from 'react'

export default function Layout({ children }: PropsWithChildren) {
  return <MainLayout>{children}</MainLayout>
}
