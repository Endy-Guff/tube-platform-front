import { FC, InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import styles from './styles.module.scss'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  registration: UseFormRegisterReturn
  error?: string
}

export const Field: FC<IProps> = ({ label, registration, error, ...rest }) => {
  return (
    <div>
      <label className={styles['input-container']}>
        <span>{label}</span>
        <input
          className={styles.input}
          {...rest}
          {...registration}
        />
      </label>
      {error && <span>{error}</span>}
    </div>
  )
}
