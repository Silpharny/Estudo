let valor1 = 4
let valor2 = 0

function Calcular(max) {

    if(valor2 == 0){
    
        valor2 = Math.floor(Math.random() * max)
        
        console.log(`Valor 1: ${valor1}`)
        console.log(`valor 2: ${valor2}`)
       
    }
    return valor1 / valor2
}


console.log(Calcular(10));