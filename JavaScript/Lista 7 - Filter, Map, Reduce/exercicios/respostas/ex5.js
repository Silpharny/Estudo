 
const filmes = [
    {
        'id': 1,
        'title': 'Die Hard',
        'valor': 12.00,
        'rating': 5.0
    },
    {
        'id': 2,
        'title': 'Homem Aranha 3',
        'valor': 8.00,
        'rating': 4.0
    },
    {
        'id': 3,
        'title': 'Homem de Ferro',
        'valor': 7.00,
        'rating': 3.0
    },
    {
        'id': 4,
        'title': 'Carros',
        'valor': 13.00,
        'rating': 5.0
    }
]

let mediaVal = filmes
    .filter((x) => x.valor < 10)
    .map((x) => x.valor)
    .reduce((previousValue, currentValue) => (previousValue += currentValue) / 2, 0)

    


console.log(mediaVal)