// SIMPLES
let idade = 25

if(idade >= 18) {
    console.log("Maior de idade")
}


// COMPOSTA
let nota = 3

if(nota >= 5) {
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
}


// ENCADEADA
let pontos = 90

if(pontos > 70) {
    console.log("Objetivo conquistado!")
    if(pontos == 100) {
        console.log("Parabéns! Você atingiu a pontuação máxima")
    }
} else{
    console.log("Você não tem pontos suficientes")
}


// SWITCH CASE
let num1 = 4
let num2 = 2

let operacao = "subtracao"

switch (operacao) {
    
    case 'soma':
        console.log(num1 + num2)
        
        break;
        
        case 'subtracao':
        console.log(num1 - num2)
        
        break;
        
        case 'divisao':
        console.log(num1 / num2)
        
        break;
        
        case 'multiplicacao':
        console.log(num1 * num2)
        
        break;


    default:
        console.log("Não encontrado")

        break;
}