interface RegisterProps {
  name: string
  email: string
  password: string
  age?: number
}

const newUser: RegisterProps = {
  name: "John Doe",
  email: "johndoe@example.com",
  password: "123456",
}

console.log(newUser)

function registerNewUser(user: RegisterProps) {
  console.log(user)
}

registerNewUser({
  name: "John Doe",
  email: "johndoe@example.com",
  password: "123456",
})
