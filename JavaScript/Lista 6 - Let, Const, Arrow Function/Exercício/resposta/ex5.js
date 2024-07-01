 
 let listaA = []

 for (i = 0; i <= 10; i++) {
    listaA.push(i + 1)
}

let x = listaA.pop()

let listaM = []

for(i = 0; i <= listaA.length; i++) {
    listaM.push(listaA[i] * x)
}


listaM.pop()

console.log(`${listaM}`);