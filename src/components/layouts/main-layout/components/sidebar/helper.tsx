import Image from 'next/image'

import { ISidebarMenuItem } from './types'

export const getIconOrImage = ({ icon, label }: ISidebarMenuItem) => {
  if (icon && typeof icon !== 'string') return <icon.icon color={icon.color} />
  if (icon)
    return (
      <Image
        src={icon}
        alt={label}
        width={25}
        height={25}
      />
    )

  return null
}
