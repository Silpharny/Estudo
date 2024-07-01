//10 - Escreva um algoritmo em Javascript que dado um número inteiro N exiba no console todos os valores pares entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.

let n

n = 11

for(i = 1; i <= n; i++) {
    if(i % 2 == 0){
         console.log(i)
    }
}