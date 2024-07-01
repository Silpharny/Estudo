//8 - Fazer uma função que pergunta um valor em metros e imprime o correspondente em decímetros, centímetros e milímetros.

function Metragem(metros) {

    let decimetros = metros * 10
    let centimetros = metros * 100
    let milimetros = metros * 1000

    console.log(`${metros}m`)
    console.log(`${decimetros}dc`)
    console.log(`${centimetros}cm`)
    console.log(`${milimetros}mm`)
}

console.log(Metragem(1))