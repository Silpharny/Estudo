// SpreadOperator -> Iterar um ou mais Arrays ou Objetos

/* -----------------ARRAY----------------- */

let primeiro = [1,2,3]

// Colocando ... + o array ou objeto que quero iterar em um array específico
let segundo = [...primeiro,4,5,6]

console.log(segundo);


/* -----------------OBJETO----------------- */

let pessoa = {
    nome: 'Sil',
    sobrenome: 'Miranda',
    cargo: "Dev"
}

let novaPessoa = {
    ...pessoa,
    status: "ATIVO",
    cidade: "Rio de Janeiro",
    telefone: "1234578910"
}

console.log(novaPessoa);


/* -----------------EXEMPLO DO DIA-A-DIA----------------- */

function novoUsuario(info) {
    let dados = {
        ...info,
        status:"ATIVO",
        inicio:"20/03/24",
        codigo:"123123123"
    }
    console.log(dados);
}

novoUsuario({nome:'Maria', sobrenome:'Silva', cargo:'Dev'})