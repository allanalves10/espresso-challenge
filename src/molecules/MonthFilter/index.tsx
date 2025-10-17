import { useState } from "react"
import { Box } from "@mui/material"
import { MonthSelect } from "../../atoms/MonthSelect"

interface MonthFilterProps {
    onChange: (dates: { start_date: string; end_date: string }) => void
}

export const MonthFilter = ({ onChange }: MonthFilterProps) => {
    const [selectedMonth, setSelectedMonth] = useState("2025-07")

    const handleChange = (month: string) => {
        setSelectedMonth(month)

        const [year, monthNum] = month.split("-").map(Number)
        const start_date = `${year}-${String(monthNum).padStart(2, "0")}-01`

        const end_date = new Date(year, monthNum, 0).toISOString().split("T")[0]

        onChange({ start_date, end_date })
    }

    return (
        <Box display="flex" alignItems="center" gap="8px">
            <MonthSelect value={selectedMonth} onChange={handleChange} />
        </Box>
    )
}
