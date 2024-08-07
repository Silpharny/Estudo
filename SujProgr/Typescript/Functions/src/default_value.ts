// Como deixar um valor por default ou deixar ele opcional

// Age é opcional e por isso vem com o ponto de interrogação ao lado
function register(
  name: string,
  email: string,
  password: string,
  age?: number
): void {
  let data = { name, email, password, age }
  console.log(data)
}
register("Sil", "2qLpH@example.com", "123456")
