import type { IStatementFilters, IStatementResponse } from "../interfaces/statement.interface"
import { buildQueryString } from "../utils"
import { api } from "./api"

export const getStatements = async (
    filters: IStatementFilters = {}
): Promise<IStatementResponse> => {
    try {
      const query = buildQueryString(filters)
      const { data } = await api.get<IStatementResponse>(`/statements${query}`)
      return data
    } catch (error) {
      console.error('Erro ao buscar extratos:', error)

      throw new Error('Erro ao buscar extratos.')
    }
}