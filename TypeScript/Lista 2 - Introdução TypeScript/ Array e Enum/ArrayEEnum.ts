// Array
let placar1: Array<number> = [1, 10, 2]; /* OU */ let placar2: number[] = [2, 4]

// Tupla - Array Misto 
// Dados de um aluno: Nome, nota, aprovado
let minhaTupla: [string, number, boolean] = ['Priscila', 9, true]



// Enums - Máquina de Estados
enum Acoes {
    correr,
    pular,
    defender,
    atacar
}

// Vamos supor que eu esteja fazendo um formulário, as respostas só poderam ser não ou sim
enum Respostas {
    nao,
    sim
}

let acaoAtual: Acoes = Acoes.atacar
console.log(acaoAtual);
