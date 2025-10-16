import {
  Table,
  TableBody,
  TableContainer,
  Paper
} from '@mui/material'
import type { IStatementResponse } from '../../interfaces'
import { TableHeader } from '../../molecules/TableHeader'
import { TableRowCustom } from '../../atoms/TableRowCustom'
import { TableCellCustom } from '../../atoms/TableCell'
import { Badge } from '../../atoms/Badge'
import { TransactionAmount } from '../../molecules/TransactionAmount'
import { formatDate } from '../../utils'
  
interface IStatementsTableProps {
  data: IStatementResponse
}

export const StatementsTable: React.FC<IStatementsTableProps> = ({ data }) => {
  const columns = ['Data', 'Descrição', 'Valor R$', 'Responsável', 'Produto']

  return (
    <TableContainer component={Paper} sx={{ maxHeight: 500 }}>
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
    </TableContainer>
  )
}