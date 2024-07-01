function dentroDoIntervalo(numero) {
    return numero >= 10 && numero <= 20;
}


function contarValoresNoIntervalo(valores) {
    let dentro = 0; 
    let fora = 0;   

    
    for (let i = 0; i < valores.length; i++) {
        
        if (dentroDoIntervalo(valores[i])) {
            dentro++; 
        } else {
            fora++; 
        }
    }

    
    return { dentro, fora };
}


let valores = [];
for (let i = 0; i < 20; i++) {
    valores.push(i + 1)
}
console.log(valores);


let resultado = contarValoresNoIntervalo(valores);


console.log(`Valores dentro do intervalo: ${resultado.dentro}`);
console.log(`Valores fora do intervalo: ${resultado.fora}`);
