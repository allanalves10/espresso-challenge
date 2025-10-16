import { useEffect, useState } from "react"
import { getStatements } from "./services"
import { StatementsTable } from "./organisms/StatementsTable";
import type { IStatementResponse } from "./interfaces";
import { Header } from "./organisms/Header";
import { Box } from "@mui/material";

function App() {
  const [statements, setStatements] = useState<IStatementResponse>();

  useEffect(() => {
    (async () => {
      try {
        const response = await getStatements();

        setStatements(response);
      } catch (err) {
        console.error((err as Error).message);
      }
    }
    )()
  }, [])

  return (
    <Box display="flex" flexDirection="column">
      <Header />
      {statements && 
        <StatementsTable data={statements} />
      }
    </Box>
  )
}

export default App
