import { TableRow } from '@mui/material'
import type { TableRowProps } from '@mui/material'
import type { FC, ReactNode } from 'react'

interface TableRowCustomProps extends TableRowProps {
    children: ReactNode
}

export const TableRowCustom: FC<TableRowCustomProps> = ({ children, ...props }) => {
    return (
        <TableRow {...props} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            {children}
        </TableRow>
    )
}