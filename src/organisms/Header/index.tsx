import { Box } from "@mui/material"
import { LogoIcon } from "../../assets"

export const Header = () => {
    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                alignItems: 'center',
                height: '64px',
                backgroundColor: '#E4DBEC',
                pl: '24px',
            }}
        >
            <LogoIcon />
        </Box>
    )
}