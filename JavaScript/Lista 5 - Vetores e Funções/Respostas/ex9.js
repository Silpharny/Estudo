//9 - Faça um programa, com uma função que necessite de três argumentos, e que forneça a soma desses três argumentos através de uma função. Seu script também deve fornecer a média dos três números, através de uma segunda função que chama a primeira.

function Soma(num1, num2, num3) {
    
    let resultado = num1 + num2 + num3

    return resultado / 3
}

console.log(Soma(1,2,3))