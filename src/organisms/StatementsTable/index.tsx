import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  TablePagination
} from '@mui/material'
import type { IStatementResponse } from '../../interfaces'
import { TableHeader } from '../../molecules/TableHeader'
import { TableRowCustom } from '../../atoms/TableRowCustom'
import { TableCellCustom } from '../../atoms/TableCell'
import { Badge } from '../../atoms/Badge'
import { TransactionAmount } from '../../molecules/TransactionAmount'
import { formatDate } from '../../utils'
import { useStatement } from '../../contexts/statementContext'
  
interface IStatementsTableProps {
  data: IStatementResponse
}

export const StatementsTable: React.FC<IStatementsTableProps> = ({ data }) => {
  const columns = ['Data', 'Descrição', 'Valor R$', 'Responsável', 'Produto']
  const { statements, setFilters, rowsPerPage, pageNumber } = useStatement()

  const handleChangePage = (_event: unknown, newPage: number) => {
    setFilters({ page: newPage })
  }
  
  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFilters({ limit: Number(event.target.value), page: 1 })
  }

  return (
    <TableContainer component={Paper} sx={{ height: '532px', maxHeight: '532px', marginBottom: '100px' }}>
      <Table stickyHeader>
        <TableHeader columns={columns} />
        <TableBody>
          {data.data.map((row, index) => (
            <TableRowCustom key={index}>
              <TableCellCustom>{formatDate(row.transaction_date)}</TableCellCustom>
              <TableCellCustom>{row.description}</TableCellCustom>
              <TableCellCustom>
                {<TransactionAmount amount={Number(row.amount || 0)} type={row.transaction_type} />}
              </TableCellCustom>
              <TableCellCustom>{row.username}</TableCellCustom>
              <TableCellCustom>{
                <Badge type={row.product_type} />}
              </TableCellCustom>
            </TableRowCustom>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={statements?.metadata.count || 0}
        page={pageNumber}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 20, 50, 100]}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage="Linhas por página"
        labelDisplayedRows={({ from, to, count }) => `${from}-${to} de ${count}`}
      />
    </TableContainer>
  )
}