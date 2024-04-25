//6 - Faça um algoritmo para ler e armazenar em um vetor a temperatura média de todos os dias de uma semana. Calcular e escrever no console: a) Menor temperatura da semana b) Maior temperatura da semana c) Temperatura média semanal d) O número de dias da semana em que a temperatura foi inferior a média semanal



function TemperaturaMedia(media) {

    let menorTemp = semanalTemp[0]
    let maiorTemp = semanalTemp[0]
    let mediaTemp = semanalTemp[0]
    let tempFrio = []
    let diasFrios

    for (let i = 0; i < semanalTemp.length; i++) {
    
        if(semanalTemp[i] < menorTemp) {
            menorTemp = semanalTemp[i]
        }
    
        if(semanalTemp[i] > maiorTemp) {
            maiorTemp = semanalTemp[i]
        }
     
        mediaTemp += semanalTemp[i] 
        
    }

    mediaTemp = mediaTemp / semanalTemp.length
    
    for (let i = 0; i < semanalTemp.length; i++) {
        if (semanalTemp[i] < mediaTemp) {
            tempFrio.push(semanalTemp[i])
        }
    }
    
    diasFrios = tempFrio.length

    console.log(`a) Menor temperatura da semana: ${menorTemp}ºC`)
    console.log(`b) Maior temperatura da semana: ${maiorTemp}ºC`)
    console.log(`c) Temperatura média da semana: ${mediaTemp}ºC`)
    console.log(`d) Quantidade de dias frios da semana: ${diasFrios} Dias`)
}

let semanalTemp = [24.2, 13, 38, 30, 14, 22, 39]

console.log(TemperaturaMedia(semanalTemp))