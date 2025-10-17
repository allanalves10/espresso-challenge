import { Box, Typography } from "@mui/material"
import { DecreaseIcon, IncreaseIcon } from "../../assets"
import { useStatement } from "../../contexts/statementContext"
import { formatCurrency } from "../../utils"
import { MonthFilter } from "../../molecules/MonthFilter"

export const MovementSummary = () => {
    const { statements, setFilters } = useStatement()

    const handleMonthChange = (dates: { start_date: string; end_date: string }) => {
        setFilters({
            start_date: dates.start_date,
            end_date: dates.end_date,
        })
    }

    const transactions = statements?.data || []

    const totalCredit = transactions
        .filter((item) => item.transaction_type === "credit")
        .reduce((acc, curr) => acc + Number(curr.amount), 0)

    const totalDebit = transactions
        .filter((item) => item.transaction_type === "debit")
        .reduce((acc, curr) => acc + Number(curr.amount), 0)

    return (
        <Box
            display="flex"
            flexDirection="column"
            gap="12px"
            sx={{
                boxShadow: `
                    0px 2px 1px -1px #00000033,
                    0px 1px 1px 0px #00000024,
                    0px 1px 3px 0px #0000001F
                `,
                borderRadius: '4px',
                p: '16px',
                backgroundColor: '#fff',
            }}
        >
            <Box 
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    flexDirection: {
                        xs: 'column',
                        sm: 'column',
                        md: 'row',
                        lg: 'row',
                    },
                }}
            >
                <Typography variant="h6">
                    Resumo de movimentações
                </Typography>

                <MonthFilter onChange={handleMonthChange} />
            </Box>
            <Box
                display="flex"
                gap="12px"
                sx={{
                    justifyContent: {
                        xs: 'center',
                        sm: 'center',
                        md: 'flex-start',
                        lg: 'flex-start',
                    },
                }}
            >
                <Box display="flex" gap="6px">
                    <IncreaseIcon />
                    <Typography>{formatCurrency(totalCredit)}</Typography>
                </Box>
                
                <Box display="flex" gap="6px">
                    <DecreaseIcon />
                    <Typography>{formatCurrency(totalDebit)}</Typography>
                </Box>
            </Box>

        </Box>
    )
}