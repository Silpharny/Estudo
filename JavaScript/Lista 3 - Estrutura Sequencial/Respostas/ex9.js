// 9 – Escreva um algoritmo em Javascript capaz de calcular as raízes de uma equação de segundo grau, levando em conta que o delta sempre será positivo.
let a, b, c

let delta, x1, x2

a = 3
b = 0
c = -21

delta = (b ** 2) - (4 * a * c)

x1 = (- b + Math.sqrt(delta)) / (2 * delta)
x2 = (- b - Math.sqrt(delta)) / (2 * delta)

console.log(`A primeira raiz quadrada da equação é: ${x1}`)
console.log(`A segunda raiz quadrada da equação é: ${x2}`)