// Generics - Receber Tipos genéricos / qualquer

function Mesclar<U, V>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}

let pessoa = Mesclar({nome: 'paulo'}, {idade: 18})
let pessoaErro = Mesclar({nome: 'paulo'}, 18) // Quando eu uso generics, eu posso atribuir qualquer tipo de dado que vai aceitar

console.log(pessoa);

// Constraints - Limitar

function Limitar<T extends object, Z extends object> (obj1: T, obj2: Z) {
    return{
        ...obj1,
        ...obj2
    }
}

let pessoa2 = Limitar({nome:'Sil'}, {idade: 25})
let pessoa2Erro = Limitar({nome:'Sil'}, 25) // Quando eu uso constraints, preciso atribuir os dados espcíficos, caso eu não defina, dará erro


// ==============

// Supomos que dentro dessa 'pessoa3' tenha centenas de dados. Caso eu queira pegar apenas um dado, posso criar uma função
let pessoa3 = Mesclar(
    {nome: 'Sil'},
    {idade: 25}
)

function GetProp<T extends object, K extends keyof T> (obj: T, key: K) {
    return obj[key]
}

let nomeclatura = GetProp(pessoa3, 'nome')

console.log(nomeclatura);

