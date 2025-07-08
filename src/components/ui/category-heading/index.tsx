import { COLORS } from '@common/consts'
import { LucideIcon } from 'lucide-react'
import { FC, PropsWithChildren } from 'react'

import { Box } from '../box'
import { Typography } from '../typography'

interface IProps extends PropsWithChildren {
  icon: LucideIcon
}

export const CatergoryHeading: FC<IProps> = ({ children, icon: Icon }) => (
  <Box
    alignItems='center'
    gap='0.5rem'
  >
    {Icon && (
      <Icon
        size={20}
        color={COLORS.primary}
      />
    )}
    <Typography.TITLE2>{children}</Typography.TITLE2>
  </Box>
)
