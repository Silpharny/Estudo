/*------------------------MAP------------------------ */

// Map - Percorre uma lista
let lista = ['Sil', 'José', 'Maria', 'Carlos', 'João']

lista.map((item, index) => {
   // console.log(`item: ${item} - index: ${index}`)
})

/*------------------------REDUCE------------------------ */

// Reduce - Busca reduzir um array
let numeros = [5,3,2]

let total = numeros.reduce((acumulador, numero, indice, original) => {
    console.log(`Acumulador: ${acumulador}`);
    console.log(`Número: ${numero}`);
    console.log(`Indice: ${indice}`);
    console.log(`Original: ${original}`);
    console.log("======================");

    return acumulador += numero
})
console.log(`Total do reduce: ${total}`);

/*------------------------FIND------------------------ */

// Find - Encontrar algo dentro de uma lista
let listagem = [1,4,2, 'Sil', 10, 'Maria']

// -------------------

let busca = listagem.find((item) => {
    // Condição que vai ser verificada
    return item === 'Maria'
})
console.log(busca); // Vai encontrar Maria e vai retornar

// -------------------

let buscaCondicional = listagem.find((item) => {
    if(item === 'Sil'){
        return console.log('item encontrado com sucesso')
    }  
})

// -------------------

let buscaErrada = listagem.find((item) => {
    
    return item === 'Jose'
})
console.log(buscaErrada); // Vai retornar Undefined pois não existe Jose na lista


/*------------------------FILTER------------------------ */

// Filter - Filtrar algum elemento dentro de um Array
let listUsers = ['Sil', 'Mariana', 'Maria', 'José', 'Carlos', 'Marcos','Paula']

let resultado = listUsers.filter((item) => {
    return item.length <= 4 
})
console.log(resultado); // Vai retornar os itens que tem 4 ou menos caracter