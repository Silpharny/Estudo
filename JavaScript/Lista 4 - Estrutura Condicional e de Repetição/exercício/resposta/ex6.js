/*
6 - Elaborar um algoritmo em Javascript para calcular o IMC ideal de uma pessoa. Tendo como dados de entrada a altura e o sexo utilizando as seguintes fórmulas:

para homens: (72.7*h)-58
para mulheres: (62.1*h)-44.7 Exiba o resultado no console
Exemplo: Entradas: Homem – 1.62 Resultado: 65.59
*/


let altura, sexo, imcIdeal

altura = 1.62
sexo = 'Masculino'

if(sexo == 'Masculino') {
    imcIdeal = 72.7 * altura - 58
} else {
    imcIdeal = 62.1 * altura - 44.7
}

console.log(imcIdeal)