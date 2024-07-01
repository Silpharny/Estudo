// 7 - Escreva um algoritmo em Javascript que dado o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. Exiba o resultado no console.
let totalEleitores = 1000

let totalBranco = 500
let totalNulo = 200
let totalValido = 300

let percentualBranco = totalBranco / totalEleitores * 100
let percentualNulo = totalNulo / totalEleitores * 100
let percentualValido = totalValido / totalEleitores * 100

console.log(`Porcentagem de votos brancos: ${percentualBranco}%`)
console.log(`Porcentagem de votos nulo: ${percentualNulo}%`)
console.log(`Porcentagem de votos válidos: ${percentualValido}%`)