// Reduce - Reduzir o objeto a um único elemento

const produtos = [
    {
        produto: 'Celular',
        categoria: 'Eletrônico',
        preco: 900
    },
    {
        produto: 'MacBook',
        categoria: 'Eletrônico',
        preco: 8000
    },
    {
        produto: 'Super Mário Bros',
        categoria: 'Jogo',
        preco: 60
    },
    {
        produto: 'PS3',
        categoria: 'Eletrônico',
        preco: 400
    }
]

// Somar os preços do item e o valor inicial é igual a 0
let total = produtos.reduce((acumulador, item) => acumulador += item.preco, 0)
console.log(total);