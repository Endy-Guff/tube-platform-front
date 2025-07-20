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
    <Box
      className={styles['content_wrapper']}
      direction='column'
    >
      <Header />
      <section className={styles.content}>{children}</section>
    </Box>
  </Box>
)
