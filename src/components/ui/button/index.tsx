import cn from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

import { Typography } from '../typography'

import styles from './styles.module.scss'

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  isLoading?: boolean
}

export const Button: FC<IProps> = ({
  variant = 'primary',
  isLoading,
  disabled,
  children,
  ...rest
}) => {
  const content = isLoading ? 'Loading...' : children

  return (
    <button
      {...rest}
      className={cn(styles.button, styles[variant])}
      disabled={isLoading || disabled}
    >
      {typeof content === 'string' ? <Typography.TEXT>{content}</Typography.TEXT> : content}
    </button>
  )
}
