export const BILLION = 1_000_000_000
export const MILLION = 1_000_000
export const THOUSAND = 1_000

const NUMBER_VARIANTS = [BILLION, MILLION, THOUSAND]

const SUFFIXES = new Map([
  [BILLION, 'B'],
  [MILLION, 'M'],
  [THOUSAND, 'K']
])

const getSuffix = (value: number): string => {
  for (const [key, suffix] of SUFFIXES) {
    if (value >= key) return suffix
  }

  return ''
}

const removeZero = (value: string): string => (value.endsWith('.0') ? value.slice(0, -2) : value)

export const getFormatViews = (views: number): string => {
  for (const variant of NUMBER_VARIANTS) {
    if (views >= variant) {
      const fixedValue = (views / variant).toFixed(1)
      return `${removeZero(fixedValue)}${getSuffix(views)} views`
    }
  }

  return `${views} views`
}
