import { TableHead, TableRow } from '@mui/material'
import { TableCellCustom } from '../../atoms/TableCell'

interface ITableHeaderProps {
  columns: string[]
}

export const TableHeader: React.FC<ITableHeaderProps> = ({ columns }) => {
  return (
        <TableHead>
            <TableRow>
                {columns.map((col) => (
                    <TableCellCustom key={col} sx={{ fontWeight: 'bold' }}>
                        {col}
                    </TableCellCustom>
                ))}
            </TableRow>
        </TableHead>
    )
}