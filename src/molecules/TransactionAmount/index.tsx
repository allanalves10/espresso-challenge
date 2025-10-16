import { Box, Typography } from '@mui/material'

interface ITransactionAmountProps {
    type: string
    amount: number
}

export const TransactionAmount = ({ type, amount }: ITransactionAmountProps) => {
    const isReceived = type === 'credit'

    const formattedValue = amount.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    const sign = isReceived ? '' : '-'
    const color = isReceived ? '#2196F3' : '#D32F2F'

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography color={color} variant='body2'>
                {sign} {formattedValue}
            </Typography>
            <Typography variant='body2'>
                {isReceived ? 'Recebido' : 'Enviado'}
            </Typography>
        </Box>
    )
}
