import { Box } from '@components'

import { Links, Profile, SearchField } from './components'

import styles from './styles.module.scss'

export const Header = () => (
  <Box
    className={styles.header}
    as='header'
    justifyContent='space-between'
    alignItems='center'
  >
    <SearchField />
    <Box
      alignItems='center'
      gap='2rem'
    >
      <Links />
      <Profile />
    </Box>
  </Box>
)
