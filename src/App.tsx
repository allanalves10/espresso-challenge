import { useEffect } from "react"
import { getStatements } from "./services"

function App() {
  useEffect(() => {
    (async () => {
      const response = await getStatements();
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
