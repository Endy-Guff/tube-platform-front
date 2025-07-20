import { Box } from '@components'
import Link from 'next/link'

import { LINKS } from './helper'

import styles from './styles.module.scss'

export const Links = () => (
  <Box
    alignItems='center'
    gap='1rem'
  >
    {LINKS.map(({ icon: Icon, href }, i) => (
      <Link
        key={`${href}-${i}`}
        className={styles.link}
        href={href}
      >
        <Icon />
      </Link>
    ))}
  </Box>
)
