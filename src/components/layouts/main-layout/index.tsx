import { FC, PropsWithChildren } from 'react'

import { Header, Sidebar } from './components'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main>
      <Sidebar />
      <div>
        <Header />
        <section>{children}</section>
      </div>
    </main>
  )
}
