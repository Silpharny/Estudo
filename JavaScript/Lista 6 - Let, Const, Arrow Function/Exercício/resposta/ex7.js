let numero = Math.floor(Math.random() * 10)

const numInteiro = (num) => {
    
    
    if(num >= 1) {
        console.log(`${num} é um número positivo`);
    }

    if(num % 1 == 0) {
        console.log(`${num} é  um número primo`);
    }
}

console.log(numInteiro(numero));