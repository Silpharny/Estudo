//5 - Elaborar um algoritmo em Javascript que dado dois valores e exiba no console uma das três mensagens a seguir: ‘Números iguais’, caso os números sejam iguais ‘Primeiro é maior’, caso o primeiro seja maior que o segundo ‘Segundo maior’, caso o segundo seja maior que o primeiro.

let a, b

a = 10
b = 20

if (a == b) {
    console.log('Números iguais')
} else if(a > b) {
    console.log('Primeiro é maior')
} else {
    console.log('Segundo é maior')
}