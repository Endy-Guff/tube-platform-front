import { MIN_COLUMN_GRID_WIDTH } from '@common/consts'
import { PropsWithChildren, forwardRef } from 'react'

import styles from './styles.module.scss'

export const VideoGridLayout = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => (
    <div
      className={styles.layout}
      ref={ref}
      style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${MIN_COLUMN_GRID_WIDTH}px, 1fr))` }}
    >
      {children}
    </div>
  )
)

VideoGridLayout.displayName = 'VideoGridLayout'
