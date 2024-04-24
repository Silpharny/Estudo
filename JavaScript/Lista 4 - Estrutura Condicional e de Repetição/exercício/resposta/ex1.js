//1 - Faça um algoritmo em Javascript para calcular a média aritmética das 3 notas de um aluno e mostre, além do valor da média, uma mensagem de "Aprovado", caso a média seja igual ou superior a 6, ou a mensagem "Reprovado", caso contrário. Exiba os resultados no console.

let nota1, nota2, nota3

nota1 = 2
nota2 = 4
nota3 = 6

media = (nota1 + nota2 + nota3) / 3

if (media >= 6) {
    console.log("Aprovado!")
} else{
    console.log("Reprovado!")
}
