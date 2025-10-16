import { Chip, Typography } from '@mui/material'
import type { FC, ReactNode } from 'react'

interface IChipButtonProps {
  label: string
  icon: ReactNode
  selected?: boolean
  onClick?: () => void
}

export const ChipButton: FC<IChipButtonProps> = ({ label, icon, selected = false, onClick }) => {
  return (
    <Chip
      label={
        <Typography display='flex' alignItems="center" gap="4px" paddingX="12px">  
          {icon} {label}
        </Typography>
      }
      color='default'
      variant={selected ? undefined : 'outlined'}
      onClick={onClick}
      sx={{ height: '42px', maxHeight: '42px' }}
    />
  )
}