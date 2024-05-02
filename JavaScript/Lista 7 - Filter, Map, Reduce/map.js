// Map - Responsável por criar um objeto e fazer alteração em outro objeto


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
    }
]

// Converter o preço do objeto acima para dolar
let convertido = produtos.map(x => x.preco*5.40)

console.log(convertido)