let carrinhoDeCompras = [
    {
        fruta: "Morango",
        peso: 3,
        valor: 30
    },
    {
        fruta: "Maçã",
        peso: 4,
        valor: 31
    }
]

function ContaTotal() {
    
    
    for (let i = 0; i < carrinhoDeCompras.length; i++) {
        
        let { fruta, peso, valor } = carrinhoDeCompras[i]

        if (peso > 8 || valor > 25) {
            
            let desconto = (valor * 1.1) - valor
            
            valor -= desconto
        }    
        
        let msg = `Você está comprando ${peso}Kg de ${fruta}. O valor total da conta deu R$${valor} reais`

        console.log(msg);
    }

}

console.log(ContaTotal());