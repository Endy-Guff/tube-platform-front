import { COLORS } from '@common/consts'
import { LucideIcon } from 'lucide-react'
import { FC, PropsWithChildren } from 'react'

import { Typography } from '../typography'

import styles from './styles.module.scss'

interface IProps extends PropsWithChildren {
  icon: LucideIcon
}

export const CatergoryHeading: FC<IProps> = ({ children, icon: Icon }) => (
  <div className={styles.heading}>
    {Icon && (
      <Icon
        size={20}
        color={COLORS.primary}
      />
    )}
    <Typography.TITLE2>{children}</Typography.TITLE2>
  </div>
)
