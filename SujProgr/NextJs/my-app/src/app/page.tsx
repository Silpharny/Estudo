async function getData() {
  //https://api.github.com/users/silpharny/repos
  const response = await fetch("https://api.github.com/users/silpharny/repos")

  return response.json()
}

interface DataProps {
  id: number
  name: string
}

export default async function Home() {
  const data: DataProps[] = await getData()

  return (
    <main>
      <h1>Página home</h1>
      <span>Seja bem vindo a página home</span>
      <h3>Repositórios</h3>
      {data.map((repo) => (
        <ul key={repo.id}>
          <li>{repo.name}</li>
        </ul>
      ))}
    </main>
  )
}
