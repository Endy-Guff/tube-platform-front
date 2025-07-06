import { COLORS } from '@common/consts'
import { PUBLIC_ROUTES } from '@config/app'
import { Menu, Youtube } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

import styles from './styles.module.scss'

interface IProps {
  toggleOpen: () => void
}

export const SidebarHeader: FC<IProps> = ({ toggleOpen }) => (
  <div className={styles.header}>
    <button
      className={styles.button}
      onClick={toggleOpen}
    >
      <Menu />
    </button>
    <Link
      className={styles.logo}
      href={PUBLIC_ROUTES.EXPLORE}
    >
      <Youtube
        color={COLORS.primary}
        size={28}
      />
      <span className={styles.title}>Tube Platform</span>
    </Link>
  </div>
)
