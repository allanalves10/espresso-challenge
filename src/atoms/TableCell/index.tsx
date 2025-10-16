import { TableCell } from '@mui/material'
import type { SxProps, TableCellProps, Theme } from '@mui/material'
import type { FC, ReactNode } from 'react'

interface ITableCellCustomProps extends TableCellProps {
    children: ReactNode
    sx?: SxProps<Theme>
}

export const TableCellCustom: FC<ITableCellCustomProps> = ({ children, sx, ...props }) => {
    return (
        <TableCell {...props} sx={{ fontSize: 14, padding: '8px 16px', ...sx }}>
            {children}
        </TableCell>
    )
}