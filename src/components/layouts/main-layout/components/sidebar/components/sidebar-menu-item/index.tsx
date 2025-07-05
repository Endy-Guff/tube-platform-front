import Link from 'next/link'
import { FC } from 'react'

import {
  ISidebarMenuItem,
  getIconOrImage
} from '@/components/layouts/main-layout/components/sidebar'

export const SidebarMenuItem: FC<ISidebarMenuItem> = props => {
  const { label, link } = props

  return (
    <li>
      <Link href={link}>
        {getIconOrImage(props)}
        <span>{label}</span>
      </Link>
    </li>
  )
}
