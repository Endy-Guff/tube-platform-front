import { Dot, Radio } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

import {
  ISidebarMenuItemProps,
  getIconOrImage
} from '@/components/layouts/main-layout/components/sidebar'

export const SidebarSubscriptionItem: FC<ISidebarMenuItemProps> = props => {
  const { label, link, isLiveNow, isRecentUpload, isOpen } = props

  return (
    <li>
      <Link href={link}>
        {getIconOrImage(props)}
        {isOpen && (
          <span>
            <span>{label}</span>
            {isLiveNow && <Radio />}
            {isRecentUpload && <Dot />}
          </span>
        )}
      </Link>
    </li>
  )
}
