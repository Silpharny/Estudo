//9 - Elabore um algoritmo que com 5 valores mostre no console o maior elemento entre os 5 e o número de vezes que esse elemento apareceu entre os valores.
let valores = [5,7,9,7,5]

let maiorValor = valores[0]

let quantidadeVezesQueAparece = 0

for(i = 0; i < valores.length; i++) {
    
    if(valores[i] == maiorValor) {
        quantidadeVezesQueAparece++
    }
}

console.log("O maior número da lista é: " +maiorValor)
console.log("Esse número aparece " + quantidadeVezesQueAparece + " vezes na lista")