//10 - Faça uma função que pergunte um valor em graus Fahrenheit e imprime o correspondente em graus Celsius.
//Fórmula: C = (f-32)(5/9)*


function ConversorDeGraus(fahrenheit) {
    let celsius = (fahrenheit-32) * (5/9)

    return console.log(`${celsius}ºC`)
}

console.log(ConversorDeGraus(86))