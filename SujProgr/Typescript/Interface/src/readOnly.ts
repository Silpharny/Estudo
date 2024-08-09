interface ProductProps {
  readonly id: string
  name: string
  description: string
  price: number
}

let product1: ProductProps = {
  id: "1",
  name: "Product 1",
  description: "Product 1 description",
  price: 10,
}

// Quando colocamos a propriedade readonly, não podemos alterar o valor dela
product1.id = "2"
