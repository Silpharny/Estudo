// Filter - Uma forma de filtrar elementos de um objeto


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

// Aqui ele está filtrando por elementos dentro do meu objeto que tenha o preço menor que 1000
let baratos = produtos.filter(x => x.preco < 1000)

console.log(baratos);