/* 

let store: object

Como declaramos a variável store como objeto acima, abaixo podemos listar quantas propriedades quisermos, para delimitar que todas as 'stores' tenha uma quantidade limite de propriedades, precisamos definir elas como um contrato(Interface)

store = {
  name: "BK",
  address: "somewhere",
  status: true,
}
 */

// Contrato -> Todo objeto store precisa ter obrigatóriamente as 3 propriedades
interface StoreProps {
  name: string
  address: string
  status: boolean
}

const burguerK: StoreProps = {
  name: "BK",
  address: "somewhere",
  status: true,

  // promocao:"10% de desconto" -> Se eu tentasse colocar essa propriedade, o TS me daria um erro, isso porque o contrato só tem 3 propriedades
}

console.log(burguerK)
