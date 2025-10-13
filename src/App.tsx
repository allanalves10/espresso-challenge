import { useEffect } from "react"
import { api } from "./services/api"
import type { IStatementResponse } from "./interfaces"

function App() {
  useEffect(() => {
    (async () => {
      const response = await api.get<IStatementResponse>("")
      console.log(response)
    }
    )()
  }, [])

  return (
    <>
      <h1>...</h1>
    </>
  )
}

export default App
