import { Field } from '@components'
import { FORM_ID } from 'app/auth/consts'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './styles.module.scss'

interface IAuthForm {
  email: string
  password: string
  confirmPassword: string
}
export const SignUp = () => {
  const {
    register,
    watch,
    handleSubmit: onSubmit,
    formState: { errors }
  } = useForm<IAuthForm>({ mode: 'onChange' })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit: SubmitHandler<IAuthForm> = data => {}

  return (
    <form
      id={FORM_ID}
      className={styles.form}
      onSubmit={onSubmit(handleSubmit)}
    >
      <Field
        label='Email'
        type='email'
        registration={register('email', { required: 'Email is required' })}
        error={errors.email?.message}
      />
      <Field
        label='Password'
        type='password'
        registration={register('password', { required: 'Password is required' })}
        error={errors.password?.message}
      />
      <Field
        label='Password'
        type='password'
        registration={register('confirmPassword', {
          required: 'Password is required',
          validate: value => value === watch('password') || 'Passwords do not match'
        })}
        error={errors.confirmPassword?.message}
      />
    </form>
  )
}
