'use client'

import { useToggle } from '@common/hooks'
import { Box } from '@components'
import cn from 'clsx'
import { usePathname } from 'next/navigation'

import { SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarSubscriptionItem } from './components'
import { SIDEBAR_MENU, SIDEBAR_MENU_MORE } from './consts'

import styles from './styles.module.scss'

export * from './consts'
export * from './types'
export * from './helper'

export const Sidebar = () => {
  const pathname = usePathname()
  const [isOpen, toggleOpen] = useToggle(true)

  return (
    <aside className={cn(styles.sidebar, { [styles.show]: isOpen, [styles.hide]: !isOpen })}>
      <SidebarHeader toggleOpen={toggleOpen} />
      <Box
        direction='column'
        gap='1.5rem'
      >
        <SidebarMenu
          menu={SIDEBAR_MENU}
          component={SidebarMenuItem}
          isOpen={isOpen}
          pathname={pathname}
        />
        {false && (
          <SidebarMenu
            menu={[]}
            component={SidebarSubscriptionItem}
            isOpen={isOpen}
            pathname={pathname}
          />
        )}
        <SidebarMenu
          menu={SIDEBAR_MENU_MORE}
          component={SidebarMenuItem}
          isOpen={isOpen}
          pathname={pathname}
        />
      </Box>
    </aside>
  )
}
