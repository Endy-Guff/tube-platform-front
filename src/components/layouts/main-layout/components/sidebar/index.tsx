import { SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarSubscriptionItem } from './components'
import { SIDEBAR_MENU, SIDEBAR_MENU_MORE } from './consts'

export * from './consts'
export * from './types'
export * from './helper'

export const Sidebar = () => {
  return (
    <aside>
      <SidebarHeader />
      <SidebarMenu
        menu={SIDEBAR_MENU}
        component={SidebarMenuItem}
      />
      <SidebarMenu
        menu={[]}
        component={SidebarSubscriptionItem}
      />
      <SidebarMenu
        menu={SIDEBAR_MENU_MORE}
        component={SidebarMenuItem}
      />
    </aside>
  )
}
