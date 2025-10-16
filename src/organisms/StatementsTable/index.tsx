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
              <TableCellCustom>{new Date(row.transaction_date).toLocaleDateString()}</TableCellCustom>
              <TableCellCustom>{row.description}</TableCellCustom>
              <TableCellCustom>{row.amount}</TableCellCustom>
              <TableCellCustom>{row.username}</TableCellCustom>
              <TableCellCustom>{row.product_type}</TableCellCustom>
            </TableRowCustom>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}