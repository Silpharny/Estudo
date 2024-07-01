let randomNum = Math.floor(Math.random() * 10)

let qtd = Math.floor(Math.random() * 5)
//console.log(qtd);

let lista = []


const pushNum = () => {
    
    for (i = 0; i < qtd; i++) {
        let randomInnerNum = Math.floor(Math.random() * 10 + 1)
        
        lista.push(randomInnerNum)
        
    }
    console.log(lista);
} 




const sum = () => {
    pushNum()

    let sum = 0
    for (const item in lista) {
        
        sum += lista[item]
    }

    console.log(sum);
}

sum()