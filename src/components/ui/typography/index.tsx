import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

import { TYPOGRAPHY_ELEMENTS } from './consts'
import { ETypography, ITypographyProps } from './types'

import styles from './styles.module.scss'

const createTypography = (variant: ETypography) => {
  const Component: FC<PropsWithChildren<ITypographyProps>> = ({ children, className }) => {
    const Tag = TYPOGRAPHY_ELEMENTS[variant]

    return <Tag className={cn(className, styles[variant])}>{children}</Tag>
  }

  Component.displayName = `Typography.${variant}`
  return Component
}

export const Typography: Record<ETypography, FC<PropsWithChildren<ITypographyProps>>> = {
  [ETypography.TITLE1]: createTypography(ETypography.TITLE1),
  [ETypography.TITLE2]: createTypography(ETypography.TITLE2),
  [ETypography.TEXT]: createTypography(ETypography.TEXT),
  [ETypography.DESCRIPTION]: createTypography(ETypography.DESCRIPTION)
}
