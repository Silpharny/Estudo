// Objetos

let pessoa = {
    // Todo objeto vai ter uma chave e um valor
    nome: 'Sil',
    sobrenome: 'Miranda',
    idade: 25,
    cargo: 'Dev'
}

// Basta chamar o objeto para retornar todos os valores
console.log(pessoa);


// Para chamar apenas uma propriedade do objeto, basta colocar o objeto + '.' + chave que eu desejo buscar 
console.log(pessoa.nome);


// Quando eu desejo ter mais de um item dentro do meu objeto, eu posso criar uma lista[], ou seja, um Array e dentro desse Array eu coloco um objeto
let users = [
    {nome: 'Sil', idade: 25, cargo: 'FullStack', status: 'ATIVO'},
    {nome: 'Carlos', idade: 33, cargo: 'Backend', status: 'ATIVO'},
    {nome: 'André', idade: 51, cargo: 'Frontend', status: 'ATIVO'}
]