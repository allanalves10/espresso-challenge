import { createContext, useContext, type ReactNode, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getStatements } from '../services/statements';
import type { IStatementFilters, IStatementResponse } from '../interfaces';

interface IStatementContext {
  statements: IStatementResponse | undefined;
  loading: boolean;
  error: string | null;
  refetch: () => void;
  filters: IStatementFilters;
  setFilters: (newFilters: Partial<IStatementFilters>) => void;
  rowsPerPage: number;
  pageNumber: number;
}

const StatementContext = createContext<IStatementContext | undefined>(undefined);

export const StatementProvider = ({ children }: { children: ReactNode }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [filters, setFiltersState] = useState<IStatementFilters>({
    start_date: undefined,
    end_date: undefined,
    product_type: undefined,
    page: pageNumber,
    limit: rowsPerPage,
  });

  const setFilters = (newFilters: Partial<IStatementFilters>) => {
    if (newFilters.page !== undefined) {
      setPageNumber(newFilters.page);
    }

    if (newFilters.limit !== undefined) {
      setRowsPerPage(newFilters.limit);
    }

    setFiltersState((prev) => ({ ...prev, ...newFilters }));
  };

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery<IStatementResponse, Error>({
    queryKey: ['statements', filters],
    queryFn: () => getStatements(filters),
  });

  return (
    <StatementContext.Provider
      value={{
        statements: data,
        loading: isLoading,
        error: error?.message || null,
        refetch,
        filters,
        setFilters,
        rowsPerPage,
        pageNumber,
      }}
    >
      {children}
    </StatementContext.Provider>
  );
};

export const useStatement = () => {
  const context = useContext(StatementContext);
  if (!context) {
    throw new Error('useStatement should be use inside StatementProvider');
  }
  return context;
};
