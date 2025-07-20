import { PRIVATE_ROUTES } from '@config'
import { Bell, LayoutGrid, LucideIcon, Plus } from 'lucide-react'

interface Link {
  icon: LucideIcon
  href: string
}

export const LINKS: Link[] = [
  {
    icon: Plus,
    href: PRIVATE_ROUTES.UPLOAD_VIDEO
  },
  {
    icon: LayoutGrid,
    href: PRIVATE_ROUTES.STUDIO
  },
  {
    icon: Bell,
    href: PRIVATE_ROUTES.STUDIO
  }
]
