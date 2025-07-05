import { LucideIcon } from 'lucide-react'

export interface ISidebarMenuIcon {
  icon: LucideIcon
  color?: string
}

export interface ISidebarMenuItem {
  link: string
  label: string
  icon?: ISidebarMenuIcon | string
  isLiveNow?: boolean
  isRecentUpload?: boolean
}

export interface ISidebarMenuGroup {
  items: ISidebarMenuItem[]
  isBorderBottom?: boolean
  title?: string
}
