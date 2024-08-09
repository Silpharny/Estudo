import "./App.css"
import { Name } from "./components/nome"
import { Header } from "./components/header"
import { useState } from "react"
import Form from "./components/form"
import TestUseState from "./components/testUseState"

function App() {
  const [name, setName] = useState<string>("Sem nome...")

  function changeName() {
    setName("Sil")
  }

  return (
    <main>
      <Header name="My App" description="A simple React application" />

      <Name person={name} age={25} />

      <button onClick={changeName}>Mudar nome</button>
      <hr />
      <br />
      <TestUseState />
      <hr />
      <br />
      <Form />
    </main>
  )
}

export default App
