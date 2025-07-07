import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

import { ETypography, ITypographyProps } from './types'

import styles from './styles.module.scss'

const createTypography = (variant: ETypography) => {
  const Component: FC<PropsWithChildren<ITypographyProps>> = ({ children, className }) => (
    <span className={cn(className, styles[variant])}>{children}</span>
  )

  Component.displayName = `Typography.${variant}`
  return Component
}

export const Typography: Record<ETypography, FC<PropsWithChildren<ITypographyProps>>> = {
  [ETypography.TITLE]: createTypography(ETypography.TITLE),
  [ETypography.TEXT]: createTypography(ETypography.TEXT),
  [ETypography.DESCRIPTION]: createTypography(ETypography.DESCRIPTION)
}
