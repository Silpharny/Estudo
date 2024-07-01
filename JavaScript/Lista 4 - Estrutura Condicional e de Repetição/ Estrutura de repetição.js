// PARA - FOR
let listaFrutas = ['Maçã', 'Banana', 'Laranja', 'Melancia', 'Abacate', 'Morango', 'Goiaba']

for (let i = 0; i < listaFrutas.length; i++) {
    const frutas = listaFrutas[i];
    console.log(frutas)
}


// ENQUANTO - WHILE
let valor = 0
let operacao = 's'

while (operacao != 'n') {
    
    console.log(valor)
    valor = valor + 1 // Podemos escrever também da seguinte forma: valor++
}


// FAZER - DO WHILE
do {
    
    valor = valor + 1 // Podemos escrever também da seguinte forma: valor++
    console.log(valor)

} while(operacao != 'n')