interface NameProps {
  person: string
  age: number
}

export function Name({ person, age }: NameProps) {
  return (
    <div>
      <h1>Name: {person}</h1>
      <h1>Age: {age}</h1>
    </div>
  )
}
