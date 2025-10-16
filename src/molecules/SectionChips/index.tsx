import { useState, type ReactNode } from 'react'
import { Box } from '@mui/material'
import { LayerIcon, BankIcon, FileIcon, SupplierIcon } from '../../assets'
import { ChipButton } from '../../atoms/ChipButton'
import { useStatement } from '../../contexts/statementContext'

type ProductType = 'business_account' | 'expense_management' | 'suppliers'

interface IButtonData {
  label: string
  type?: ProductType
  icon: ReactNode
}

const buttonsData: IButtonData[] = [
  { label: 'Visão geral', type: undefined, icon: <LayerIcon /> },
  { label: 'Conta Empresarial', type: 'business_account', icon: <BankIcon /> },
  { label: 'Gestão de despesas', type: 'expense_management', icon: <FileIcon /> },
  { label: 'Fornecedores', type: 'suppliers', icon: <SupplierIcon /> },
]

export const SectionChips = () => {
  const [selected, setSelected] = useState('Visão geral')
  const { setFilters } = useStatement()

  return (
    <Box display="flex" gap={2} overflow="auto">
      {buttonsData.map((item) => (
        <ChipButton
          key={item.label}
          icon={item.icon}
          label={item.label}
          selected={selected === item.label}
          onClick={() => {
            setSelected(item.label)
            setFilters({ product_type: item.type })
          }}
        />
      ))}
    </Box>
  )
}