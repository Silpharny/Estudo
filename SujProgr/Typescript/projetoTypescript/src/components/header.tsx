interface HeaderProps {
  name: string
  description?: string
}

export function Header({ name, description }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{description}</p>
    </header>
  )
}
