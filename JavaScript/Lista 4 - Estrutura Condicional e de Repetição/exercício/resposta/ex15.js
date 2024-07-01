//15 - Escreva um algoritmo em Javascript que exiba no console os 15 primeiros números da série Fibonacci: 1, 1, 2, 3, 5, 8, 13…


let anterior = 0
let atual = 1
let proximo

for(i = 0; i < 15; i++) {

    proximo = anterior + atual
    anterior = atual
    atual = proximo 

    console.log(anterior)
}