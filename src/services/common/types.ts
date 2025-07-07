export type PaginationResponse<T, K extends string = 'data'> = {
  [key in K]: T
} & {
  limit: number
  page: number
  totalCount: number
  totalPages: number
}
