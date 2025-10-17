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
}

const StatementContext = createContext<IStatementContext | undefined>(undefined);

export const StatementProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFiltersState] = useState<IStatementFilters>({
    start_date: undefined,
    end_date: undefined,
    product_type: undefined,
    page: 1,
    limit: 20,
  });

  const setFilters = (newFilters: Partial<IStatementFilters>) => {
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
