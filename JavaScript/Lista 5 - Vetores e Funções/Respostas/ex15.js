//15 - Faça uma função que recebe uma lista de produtos e seus preços e acrescenta 10% de valor para os produtos com preço menor que 150. Exibindo a lista final no console por ordem de preço (contendo nome do produto – valor reajustado). Exemplo:
//Fruta – 150 Bebida - 200


function ReajustarValores(produtos) {

    listaProdutos.forEach(produto => {
        
        if(produto.preco < 150) {
            produto.preco *= 1.1
        }
    });
    
    listaProdutos.sort((a, b) => a.preco - b.preco)

    listaProdutos.forEach(produto => {
        console.log(`${produto.nome} - ${produto.preco.toFixed(2)}`)
    })
}


let listaProdutos = [
    { nome: 'Arroz', preco: 150 },
    { nome: 'Macarrão', preco: 120 },
    { nome: 'Alface', preco: 240 },
    { nome: 'Abacate', preco: 100 }
]

ReajustarValores(listaProdutos)