//3 - Elaborar um algoritmo em Javascript que dado 2 valores A e B e os exibam no console com a mensagem: "São múltiplos" ou "Não são múltiplos".

let a, b

a = 10
b = 8

if (a > b) {
    /* Utiliza-se o operador de resto "%"
    Se o resto da divisão do maior número pelo menor
    for 0, então os números são multiplos */
    
    if (a % b == 0) {
        console.log('São multiplos')

    } else {
        console.log('Não são multiplos')

    }
} else {
    if(b % a == 0) {
        console.log('São multiplos')
    } else {
        console.log('Não são multiplos')
    }
}
