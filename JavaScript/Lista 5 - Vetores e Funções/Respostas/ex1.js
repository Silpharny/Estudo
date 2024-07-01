//1 - Crie um algoritmo em Javascript que gere um vetor de 8 posições, onde os valores de cada posição seja o cubo de cada índice.

let lista = [1,2,3,4,5,6,7,8]

for(i = 0; i < 8; i++) {

    let value = lista[i] ** 3
    console.log(value)
}