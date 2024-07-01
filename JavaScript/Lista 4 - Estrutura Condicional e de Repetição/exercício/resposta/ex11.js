//11 – Escreva um algoritmo em Javascript que calcule e exiba no console a tabuada do 7 (1 a 10). No console deverá ser impresso: 7 X 1 = 7 7 X 2 = 14 ...

for(i = 1; i <= 10; i++) {
    let resultadoMultiplicacao = 7 * i
    console.log(`7 x ${i} = ${resultadoMultiplicacao}`)
}