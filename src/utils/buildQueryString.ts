import type { IStatementFilters } from "../interfaces"

export const buildQueryString = (filters: IStatementFilters): string => {
    const params = new URLSearchParams()
  
    if (filters.start_date) params.set('start_date', filters.start_date)
    if (filters.end_date) params.set('end_date', filters.end_date)
    if (filters.product_type) params.set('product_type', filters.product_type)
    if (filters.page) params.set('page', filters.page.toString())
    if (filters.limit) params.set('limit', filters.limit.toString())
  
    const queryString = params.toString()
    return queryString ? `?${queryString}` : ''
}