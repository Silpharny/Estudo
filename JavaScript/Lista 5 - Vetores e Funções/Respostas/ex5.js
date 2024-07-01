//5 - Crie um algoritmo que leia um vetor Q de 10 posições (aceitar somente números pares). O algoritmo deverá escrever o valor do maior e menor elemento de Q e a respectiva posição que ele ocupa no vetor. Gere os resultados no console.

let listaQ = [10, 2, 6, 20, 16, 12, 8, 4, 18, 14]
let maiorNum = listaQ[0]
let menorNum = listaQ[0]

let posicaoMaior
let posicaoMenor

for (let i = 0; i < listaQ.length; i++) {
    
    
    if(listaQ[i] > maiorNum) {
        maiorNum = listaQ[i]
        posicaoMaior = i
    }
    
    if(listaQ[i] < menorNum) {
        menorNum = listaQ[i]  
        posicaoMenor = i
    }
}

console.log(`O maior número é: ${maiorNum} e ele ocupa a posição: ${posicaoMaior}`)
console.log(`O menor número é: ${menorNum} e ele ocupa a posição: ${posicaoMenor}`)