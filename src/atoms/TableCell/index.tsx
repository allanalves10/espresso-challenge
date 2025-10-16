import { TableCell } from '@mui/material'
import type { TableCellProps } from '@mui/material'
import type { FC, ReactNode } from 'react'

interface ITableCellCustomProps extends TableCellProps {
    children: ReactNode
}

export const TableCellCustom: FC<ITableCellCustomProps> = ({ children, ...props }) => {
    return (
        <TableCell {...props} sx={{ fontSize: 14, padding: '8px 16px' }}>
            {children}
        </TableCell>
    )
}