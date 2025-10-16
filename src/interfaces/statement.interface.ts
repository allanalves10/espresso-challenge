interface IMetadata {
    count: number
    page: number
    limit: number
    pages: number
    last: number
    prev: number | null
    next: number | null
}
  
interface IStatement {
    id: string
    description: string
    amount: string
    transaction_type: 'debit' | 'credit'
    transaction_date: string
    username: string
    product_type: string
}
  
export interface IStatementResponse {
    metadata: IMetadata
    data: IStatement[]
}

export interface IStatementFilters {
    start_date?: string
    end_date?: string
    product_type?: 'business_account' | 'expense_management' | 'suppliers'
    page?: number
    limit?: number
  }
  