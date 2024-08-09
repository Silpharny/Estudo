import { FormEvent, useState, useRef } from "react"

interface userProps {
  name: string
  age: number
}

export default function Form() {
  const nameRef = useRef<HTMLInputElement>(null)
  const ageRef = useRef<HTMLInputElement>(null)
  const [users, setUsers] = useState<userProps[]>([])

  function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!nameRef.current?.value || !ageRef.current?.value) {
      alert("Please type your name")
      return
    }

    const user = {
      name: nameRef.current?.value,
      age: parseFloat(ageRef.current?.value),
    }

    setUsers((values) => [...values, user])

    nameRef.current.value = ""
    ageRef.current.value = ""
  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label>Name:</label>
        <input type="text" placeholder="digite seu nome" ref={nameRef} />
        <br />
        <label>Age:</label>
        <input type="text" placeholder="digite sua idade" ref={ageRef} />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>

      {users.map((user) => (
        <div key={user.name}>
          <br />
          <span>
            {user.name} - {user.age} Anos
          </span>

          <br />
        </div>
      ))}
    </div>
  )
}
