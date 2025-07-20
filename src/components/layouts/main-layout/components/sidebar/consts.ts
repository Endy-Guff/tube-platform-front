import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '@config'
import {
  CircleAlert,
  CirclePlay,
  Compass,
  Flame,
  FolderHeart,
  Gamepad2,
  History,
  Settings,
  TvMinimalPlay
} from 'lucide-react'

import { ISidebarMenuGroup } from './types'

export const SIDEBAR_MENU: ISidebarMenuGroup[] = [
  {
    isBorderBottom: true,
    items: [
      {
        label: 'Explore',
        link: PUBLIC_ROUTES.EXPLORE,
        icon: { icon: Compass }
      },
      {
        label: 'Trending',
        link: PUBLIC_ROUTES.TRENDING,
        icon: { icon: Flame }
      },
      {
        label: 'Video games',
        link: PUBLIC_ROUTES.VIDEO_GAMES,
        icon: { icon: Gamepad2 }
      }
    ]
  },
  {
    items: [
      {
        label: 'My channel',
        link: PUBLIC_ROUTES.MY_CHANNEL,
        icon: { icon: TvMinimalPlay }
      },
      {
        label: 'Subscriptions',
        link: PUBLIC_ROUTES.SUBSCRIPTIONS,
        icon: { icon: CirclePlay }
      },
      {
        label: 'History',
        link: PUBLIC_ROUTES.HISTORY,
        icon: { icon: History }
      },
      {
        label: 'Liked videos',
        link: PUBLIC_ROUTES.LIKED_VIDEOS,
        icon: { icon: FolderHeart }
      }
    ]
  }
]

export const SIDEBAR_MENU_MORE: ISidebarMenuGroup = {
  title: 'More from Tube Platform',
  items: [
    {
      label: 'Settings',
      link: PRIVATE_ROUTES.SETTINGS,
      icon: { icon: Settings }
    },
    {
      label: 'Send feedback',
      link: PUBLIC_ROUTES.FEEDBACK,
      icon: { icon: CircleAlert }
    }
  ]
}
