const usuario = {
    nome: "Sil",
    idade: 25,
    cidade: "Niterói",
    estado: "Rio de Janeiro"
}

// Forma antiga

/*
 
const nome = usuario.nome
const idade = usuario.idade
const cidade = usuario.cidade
const estado = usuario.estado

console.log(nome);
console.log(idade);
console.log(cidade);
console.log(estado);

*/


// Desestruturação

const { nome, idade, cidade, estado } = usuario

console.log(nome, idade, cidade, estado);

