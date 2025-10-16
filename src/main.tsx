import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/globalStyles.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatementProvider } from './contexts/statementContext.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StatementProvider>
        <App />
      </StatementProvider>
    </QueryClientProvider>
  </StrictMode>,
)
