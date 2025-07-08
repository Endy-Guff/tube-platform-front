import cn from 'clsx'
import { FC } from 'react'

import { IBox } from './types'

import styles from './styles.module.scss'

export * from './types'

export const Box: FC<IBox> = ({
  as: Tag = 'div',
  className,
  gap,
  justifyContent,
  alignItems,
  direction,
  style,
  ...props
}) => (
  <Tag
    className={cn(className, styles.box)}
    style={{
      gap: typeof gap === 'number' ? `${gap}px` : gap,
      justifyContent,
      alignItems,
      flexDirection: direction,
      ...style
    }}
    {...props}
  />
)
