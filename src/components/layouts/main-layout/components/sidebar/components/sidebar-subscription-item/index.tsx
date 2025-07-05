import { Dot, Radio } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

import {
  ISidebarMenuItem,
  getIconOrImage
} from '@/components/layouts/main-layout/components/sidebar'

export const SidebarSubscriptionItem: FC<ISidebarMenuItem> = props => {
  const { label, link, isLiveNow, isRecentUpload } = props

  return (
    <li>
      <Link href={link}>
        {getIconOrImage(props)}
        <span>
          <span>{label}</span>
          {isLiveNow && <Radio />}
          {isRecentUpload && <Dot />}
        </span>
      </Link>
    </li>
  )
}
