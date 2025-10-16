import { Box } from '@mui/material'
import { BankIcon, FileIcon, SupplierIcon } from '../../assets'
import type { JSX } from 'react'

interface IBadgeProps {
    type: string
}

export const Badge = ({ type }: IBadgeProps) => {
    const badgeMap: Record<string, { icon: JSX.Element; label: string }> = {
        business_account: {
            icon: <BankIcon />,
            label: 'Conta empresarial',
        },
        expense_management: {
            icon: <FileIcon />,
            label: 'Gestão de despesas',
        },
        suppliers: {
            icon: <SupplierIcon />,
            label: 'Fornecedores',
        },
    }
    const { icon, label } = badgeMap[type]

    return (
        <Box display="flex" alignItems="center" gap="6px">
            {icon}
            {label}
        </Box>
    )
}
