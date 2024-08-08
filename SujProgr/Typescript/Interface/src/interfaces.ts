/* 

let store: object

Como declaramos a variável store como objeto acima, abaixo podemos listar quantas propriedades quisermos, para delimitar que todas as 'stores' tenha uma quantidade limite de propriedades, precisamos definir elas como um contrato(Interface)

store = {
  name: "BK",
  address: "somewhere",
  status: true,
}
 */

// Contrato -> Todo objeto store precisa ter obrigatoriamente as 3 propriedades
interface StoreProps {
  name: string
  address: string
  status: boolean
}

const burgerK: StoreProps = {
  name: "BK",
  address: "somewhere",
  status: true,

  // promo :"10% OFF" -> Se eu tentasse colocar essa propriedade, o TS me daria um erro, isso porque o contrato só tem 3 propriedades
}

console.log(burgerK)

function newStore({ name, address, status }: StoreProps): void {
  console.log(`Name: ${name}`)
  console.log(`Address: ${address}`)
  console.log(`Status: ${status}`)
}

newStore({ name: "BK", address: "somewhere", status: true })
