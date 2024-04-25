//3 - Ler um vetor A de 5 números. Após, ler mais um número e guardar em uma variável X. Armazenar em um vetor M o resultado de cada elemento de A multiplicado pelo valor X. Logo após, imprimir o vetor M. Gere os resultados no console.

let listaA = [2, 3, 8, 1, 9]
let x
let listaM = []

for (let i = 0; i < listaA.length; i++) {
    
    x = listaA[i] + 1
    listaM.push(listaA[i]*x)
    
}

console.log(listaM)