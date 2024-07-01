/*
2 - Dado um vetor V:

Posição no Vetor:	1	2	3	4	5	6	7	8
Valor de V:	        5	1	4	2	7	8	3	6
Crie um algoritmo em Javascript que gere um vetor V2 a partir do dobro de cada valor de V. Gere os resultados no console.
*/

let lista1 = [5, 1, 4, 2, 7, 8, 3, 6]
let lista2 = []

for (let i = 0; i < lista1.length; i++) {
    
    lista2.push(lista1[i]*2)

}
console.log(lista2)
