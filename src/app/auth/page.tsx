import { NO_INDEX_PAGE } from '@common/consts'
import { Box } from '@components'
import { Metadata } from 'next'

import { Auth } from './_components'

import styles from './styles.module.scss'

export const metadata: Metadata = {
  title: 'Auth',
  ...NO_INDEX_PAGE
}

export default function AuthPage() {
  return (
    <Box
      className={styles.auth}
      as='main'
      alignItems='center'
      justifyContent='center'
    >
      <Auth />
    </Box>
  )
}
