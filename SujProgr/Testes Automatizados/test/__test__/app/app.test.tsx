import { render, fireEvent } from "@testing-library/react-native"
import App from "../../App"

/*
Para fazer um teste podemos utilizar o 'it' ou 'test'. Ele vai receber uma descrição e aqui podemos descrever qual tipo de teste estamos fazendo, é comum utilizarmos em inglês e começar com: "should test...", ou seja, 'esse teste deveria fazer x, y ou z(Descrever o teste)".
Vai receber também uma função anônima e dentro dela podemos realizar todo teste que quisermos 

*/

it("Test exemplo", () => {
  // expect = É esperado que
  // toBe = Deve ser igual a

  expect(1).toBe(1)

  const num1 = 10
  const num2 = 20
  const sum = num1 + num2

  expect(sum).toBe(30) // É esperado que a variável sum seja igual a 30
  expect(sum).not.toEqual(40) // É esperado que a variável sum seja diferente de 40
  expect(sum).toBeGreaterThan(20) // O número esperado tem que ser maior que 20
  expect(sum).toBeGreaterThanOrEqual(30) // O número esperado tem que ser maior ou igual a 30
  expect(sum).toBeLessThan(40) // O número esperado tem que ser menor que 40
  expect(sum).toBeLessThanOrEqual(30) // O número esperado tem que ser menor ou igual a 30
})

it("test render app component", () => {
  render(<App />)
})

// Para fazer o teste em mais de elemento dentro de um componente, basta chamar o describe e dentro dele fazer todos os testes individuais

describe("App components tests", () => {
  it("test render app component inside describe", () => {
    render(<App />)
  })

  it("should render App title ", () => {
    const { getByText } = render(<App />) // getByText = Recebe o texto que queremos testar

    expect(getByText("App Count")).toBeTruthy() // Espera que o texto 'App Count' esteja no componente App
  })

  /*
    Triple A:
    - Arrange (Preparar o teste)
    - Act (Rodar o teste)
    - Assert (Verificar se a acção foi realizada com sucesso)

    https://medium.com/@pablodarde/o-padr%C3%A3o-triple-a-arrange-act-assert-741e2a94cf88
   
  */

  it("should add counter at press button", () => {
    const { getByTestId, getByText } = render(<App />)

    const button = getByText("+")
    fireEvent.press(button)

    const counterTest = getByTestId("counter")

    expect(counterTest.props.children).toBeGreaterThan(0)
  })

  it("should decrease counter at press button", () => {
    const { getByTestId, getByText } = render(<App />)

    const button = getByText("-")
    fireEvent.press(button)

    const counterTest = getByTestId("counter")
    expect(counterTest.props.children).toBeLessThan(0)
  })
})
