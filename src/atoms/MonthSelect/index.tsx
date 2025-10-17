import { Select, MenuItem } from "@mui/material"
  
export interface IMonthSelectProps {
    value: string
    onChange: (month: string) => void
}

export const MonthSelect = ({ value, onChange }: IMonthSelectProps) => {
    const months = [
        { label: "Julho 2025", value: "2025-07" },
        { label: "Agosto 2025", value: "2025-08" },
        { label: "Setembro 2025", value: "2025-09" },
    ]

    return (
        <Select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            size="small"
            sx={{ minWidth: 160, borderRadius: 8 }}
        >
            {months.map((month) => (
                <MenuItem key={month.value} value={month.value}>
                    {month.label}
                </MenuItem>
            ))}
        </Select>
    )
}
