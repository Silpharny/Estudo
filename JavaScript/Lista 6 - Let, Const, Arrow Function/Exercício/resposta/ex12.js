let limite = Math.floor(Math.random() * 50)


const primoOuNao = (limite) => {
    
    for(numero = 2; numero <= limite; numero++) {
        let ehPrimo = true

        for(divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                ehPrimo = false
                    break
            }
        }
        if(ehPrimo) {
            console.log(`${numero} é primo`);
        } else {
            console.log(`${numero} não é primo`);
        }
    }

}

primoOuNao(limite)