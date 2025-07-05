import { FC } from 'react'

import {
  ISidebarMenuGroup,
  ISidebarMenuItem
} from '@/components/layouts/main-layout/components/sidebar'

interface IProps {
  menu: ISidebarMenuGroup[] | ISidebarMenuGroup
  component: FC<ISidebarMenuItem>
}

export const SidebarMenu: FC<IProps> = ({ menu, component: Component }) => {
  const menuGroupRender = ({ items, title }: ISidebarMenuGroup) => (
    <nav key={String(items)}>
      {title && <span>{title}</span>}
      <ul>
        {items.map((props: ISidebarMenuItem) => (
          <Component
            key={props.link}
            {...props}
          />
        ))}
      </ul>
    </nav>
  )

  return <div>{Array.isArray(menu) ? menu.map(menuGroupRender) : menuGroupRender(menu)}</div>
}
