//13 – Faça um programa que dado um valor A, calcule a soma de todos os números pares e o produto de todos os números ímpares até chegar no valor A.

let a = 4

let soma = 0

let produto = 1


for(i = 0; i < a; i++) {
    
    if(i % 2 == 0) {
        soma = soma + i
    } else {
        produto = produto * i
    }

}

console.log(`Soma: ${soma}`)
console.log(`Produto ${produto}`)