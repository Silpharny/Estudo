//14 – Faça um programa que dado 5 valores imprima o maior e o menor entre eles.

let valores = [8, 4, 3, 9, 7]

let maiorValor = valores[0]
let menorValor = valores[0]

for(i = 0; i < valores.length; i++) {
    
    if(valores[i] > maiorValor) {
        maiorValor = valores[i]
    }
    
    if(valores[i] < menorValor) {
        menorValor = valores[i];
    }
}

console.log(`O maior valor é: ${maiorValor}`)
console.log(`O menor valor é: ${menorValor}`)