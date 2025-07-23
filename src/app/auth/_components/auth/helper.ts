import { ETab } from 'app/auth/types'

export const isTab = (value: unknown): value is ETab =>
  typeof value === 'string' && Object.values(ETab).includes(value as ETab)
