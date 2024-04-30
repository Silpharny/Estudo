
let lista = []

let maxList = 3



for(i = 0; i < maxList; i++) {
    let random = Math.floor(Math.random() * 10)
    lista.push(random)
}

let menorNum = () =>  Math.min(...lista)

let maiorNum = () =>  Math.max(...lista)

console.log(lista);
console.log(`O menor número é o: ${menorNum()}`)
console.log(`O maior número é o: ${maiorNum()}`)