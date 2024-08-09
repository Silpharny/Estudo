import { useState } from "react"

interface userProps {
  name: string
  age: number
  occupation: string
}

export default function TestUseState() {
  const [user, setUser] = useState<userProps>()

  function newUser() {
    setUser({
      name: "Sil",
      age: 25,
      occupation: "Programador",
    })
  }

  return (
    <div>
      <button onClick={newUser}>Novo Usuário</button>
      {user && (
        <div>
          <p>User: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Occupation: {user.occupation}</p>
        </div>
      )}
    </div>
  )
}
