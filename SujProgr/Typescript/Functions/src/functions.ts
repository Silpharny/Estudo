function login(username: string): string {
  console.log(`Welcome ${username}`)
  return username
}

login("Sil")

const n1: number = 10
const n2: number = 20

function sum(value1: number, value2: number): number {
  const sum = value1 + value2
  return sum
}

// or

function sum2(value1: number, value2: number): string {
  let sum = value1 + value2

  if (sum > 20) {
    return "Greater than 20"
  } else {
    return "Less than or equal to 20"
  }
}
