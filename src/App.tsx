import { useEffect, useState } from "react"
import { getStatements } from "./services"
import { StatementsTable } from "./organisms/StatementsTable";
import type { IStatementResponse } from "./interfaces";

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
    <>
      {statements && 
        <StatementsTable data={statements} />
      }
    </>
  )
}

export default App
