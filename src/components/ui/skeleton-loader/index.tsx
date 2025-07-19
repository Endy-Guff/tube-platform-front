import { FC, HTMLAttributes } from 'react'

import styles from './styles.module.scss'

interface IProps extends Pick<HTMLAttributes<HTMLDivElement>, 'style'> {
  count?: number
}

export const SkeletonLoader: FC<IProps> = ({ count = 1, style }) => {
  return Array.from({ length: count }, (_, index) => (
    <div
      className={styles.skeleton}
      key={index}
      style={style}
    />
  ))
}
