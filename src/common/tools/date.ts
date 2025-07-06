import { formatDistanceToNow } from 'date-fns'

export const getFormatRelativeDate = (date: Date): string =>
  formatDistanceToNow(date, { addSuffix: true })
