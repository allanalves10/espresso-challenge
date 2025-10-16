import { StatementsTable } from "./organisms/StatementsTable";
import { Header } from "./organisms/Header";
import { Box, Typography } from "@mui/material";
import { SectionChips } from "./molecules/SectionChips";
import { useStatement } from "./contexts/statementContext";

function App() {
  const { statements } = useStatement();

  return (
    <Box display="flex" flexDirection="column">
      <Header />

      <Box 
        display="flex"
        flexDirection="column"
        gap="24px"
        paddingTop="40px"
        sx={{
          mx: {
            xs: '16px',
            sm: '40px',
            md: '80px',
            lg: '150px',
          },
          px: {
            xs: 0,
            sm: 0,
            md: '12px',
            lg: '24px',
          },
          pt: {
            xs: '16px',
            sm: '16px',
            md: '24px',
            lg: '40px',
          }
        }}
      >
        <Typography variant="h5">
          Extrato
        </Typography>

        <SectionChips />

        {statements && 
          <StatementsTable data={statements} />
        }
      </Box>
    </Box>
  )
}

export default App
