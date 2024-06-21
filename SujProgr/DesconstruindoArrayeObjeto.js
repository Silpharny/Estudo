// Desconstrução Objeto

let pessoa = {
    nome: 'Sil',
    sobrenome: 'Miranda',
    idade: 25,
    cargo: 'Dev'
}

// Para chamar um objeto, normalmente fazemos os dois exemplos abaixo
console.log(pessoa.nome)
console.log(pessoa.cargo)


//Desconstrução de objeto -> Abaixo é a forma de desconstruir um objeto, vamos passar suas propriedades entre chaves {} e vamos atribuir o objeto a ele
const { nome, cargo, sobrenome } = pessoa

// Para chamar é simples, ao invés de usar pessoa.nome, como eu desconstrui, agora eu posso usar somente nome
console.log(nome)
console.log(sobrenome)
console.log(cargo)

/* ------------------------------------- */


// Desconstrução Array
let users = ['Sil', 'Maria', 'João', 'Mariana']

let { 0:y, 2:x } = users

console.log(x,y);

// Segunda forma de desconstrução
let[primeiroNome, segundoNome] = users

console.log(segundoNome);