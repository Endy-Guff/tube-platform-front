import { Box } from '@components'
import { FC, PropsWithChildren } from 'react'

import { Header, Sidebar } from './components'

import styles from './styles.module.scss'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <Box
    as='main'
    className={styles.main}
  >
    <Sidebar />
    <div className={styles['content_wrapper']}>
      <Header />
      <section className={styles.content}>{children}</section>
    </div>
  </Box>
)
