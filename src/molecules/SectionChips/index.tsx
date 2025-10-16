import { useState } from 'react'
import { Box } from '@mui/material'
import { LayerIcon, BankIcon, FileIcon, SupplierIcon } from '../../assets'
import { ChipButton } from '../../atoms/ChipButton'

const buttonsData = [
  { label: 'Visão geral', icon: <LayerIcon /> },
  { label: 'Conta Empresarial', icon: <BankIcon /> },
  { label: 'Gestão de despesas', icon: <FileIcon /> },
  { label: 'Fornecedores', icon: <SupplierIcon /> },
]

export const SectionChips = () => {
  const [selected, setSelected] = useState('Visão geral')

  return (
    <Box display="flex" gap={2} overflow="auto">
      {buttonsData.map((item) => (
        <ChipButton
          key={item.label}
          icon={item.icon}
          label={item.label}
          selected={selected === item.label}
          onClick={() => setSelected(item.label)}
        />
      ))}
    </Box>
  )
}