import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

import {
  ISidebarMenuItemProps,
  getIconOrImage
} from '@/components/layouts/main-layout/components/sidebar'

import styles from './styles.module.scss'

export const SidebarMenuItem: FC<ISidebarMenuItemProps> = props => {
  const { label, link, isActive } = props

  return (
    <li className={styles.item}>
      <Link
        className={cn(styles.link, { [styles.active]: isActive })}
        href={link}
      >
        {getIconOrImage(props)}
        <span>{label}</span>
      </Link>
    </li>
  )
}
