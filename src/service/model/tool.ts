export type SearchParameters<T> = {
  entity?: T
  root?: Partial<Record<string, any>>
  pageNo?: number
  pageSize?: number
}
