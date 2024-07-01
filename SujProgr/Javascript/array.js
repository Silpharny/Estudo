let listaFrutas = ['banana', 'maçã', 'abacate', 'abacaxi', 'morango']

// Pegar a lista completa
listaFrutas

// Pegar item pelo índice -> [i] - Retorna o elemento de um índice específico
listaFrutas[0]

// Saber o tamanho da lista -> length - Retorna a quantidade de itens que tem na lista
listaFrutas.length


/* -------------------------------------------MANIPULAÇÃO DE ARRAYS------------------------------------------- */


let userList = ['Arnaldo', 'Maria', 'Clara', 'Matheus', 'Sil', 'Gabriel', 'Lucas', 'Carlos', 'Mariana']

// Pegar item específico da lista -> indexOf - Retorna o índice do elemento que estou pesquisando
userList.indexOf('Sil') //índice 4 

// Quando eu tento pegar um item que não existe na minha lista, o retorno vai ser -1
// Exemplo: console.log(userList.indexOf('Sil213'))


// Para alterar elemento de nossa lista
userList[2] = 'Juliana' // Isso vai fazer com que o usuário do índice 2(que é a Clara) seja substituida por Juliana

// push -> Adicionar item a lista
userList.push('Laurinano')

// shift -> Para remover o primeiro item do array
userList.shift()

// pop -> Para remover o último item
userList.pop()

// Splice -> Para remover item específco, ele espera dois parâmetros, o índice e a quantidade de itens
userList.splice(2,1)

// Sort é usado para ordernar os elementos de um array
userList.sort()

// join -> Para retornar todos os valores do array separados por algum elemento
userList.join(';')
// No exemplo acima eu estou pedindo para imprimir minha lista separado por ';'