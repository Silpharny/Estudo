//2 - Elaborar um algoritmo em Javascript que dado 3 valores A, B, C, exiba no console o maior dos 3 valores e com a mensagem: "É o maior ".

let a, b, c

a = 10
b = 20
c = 30

if(a > b && a > c) {
    console.log(`${a} é o maior valor`)

} else if(b > a && b > c) {
    console.log(`${b} é o maior valor`)

} else {
    console.log(`${c} é o maior valor`)

}


/* 

Posso substituir a estrutura por:

console.log(Math.max(A, B, C) + " é o maior")

A função max do JavaScipt permite pegar o maior número

*/