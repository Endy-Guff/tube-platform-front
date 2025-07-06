import cn from 'clsx'
import { FC } from 'react'

import {
  ISidebarMenuGroup,
  ISidebarMenuItem,
  ISidebarMenuItemProps
} from '@/components/layouts/main-layout/components/sidebar'

import styles from './styles.module.scss'

interface IProps {
  menu: ISidebarMenuGroup[] | ISidebarMenuGroup
  component: FC<ISidebarMenuItemProps>
  pathname: string
  isOpen: boolean
}

export const SidebarMenu: FC<IProps> = ({ menu, isOpen, pathname, component: Component }) => {
  const menuGroupRender = ({ items, title, isBorderBottom }: ISidebarMenuGroup) => (
    <nav
      key={String(items)}
      className={cn(styles.nav, { [styles.border]: isBorderBottom })}
    >
      {title && <span className={cn(styles.title, { [styles.isShow]: isOpen })}>{title}</span>}
      <ul className={styles.list}>
        {items.map((props: ISidebarMenuItem) => (
          <Component
            {...props}
            key={props.link}
            isActive={pathname === props.link}
            isOpen={isOpen}
          />
        ))}
      </ul>
    </nav>
  )

  return (
    <div className={styles.menu}>
      {Array.isArray(menu) ? menu.map(menuGroupRender) : menuGroupRender(menu)}
    </div>
  )
}
