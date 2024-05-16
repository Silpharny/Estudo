"use strict";
class Pessoa {
    constructor(_nome, _endereco, _cpf) {
        this.nome = _nome;
        this.endereco = _endereco;
        this.cpf = _cpf;
    }
}
class Estudante extends Pessoa {
    constructor(_nomeSuper, _enderecoSuper, _cpfSuper, _turma, _turno) {
        super(_nomeSuper, _enderecoSuper, _cpfSuper);
        this.turma = _turma;
        this.turno = _turno;
    }
}
let estudantes = [];
const addEstudante = (nome, endereco, cpf, turma, turno) => {
    let estudante = new Estudante(nome, endereco, cpf, turma, turno);
    estudantes.push(estudante);
};
addEstudante('sil', 'rua a', '123', 'turma a', 'manhã');
addEstudante('Laura', 'rua b', '321', 'turma b', 'tarde');
addEstudante('Vitor', 'rua c', '456', 'turma a', 'manhã');
addEstudante('Marcos', 'rua d', '654', 'turma b', 'noite');
addEstudante('Aline', 'rua e', '789', 'turma a', 'tarde');
console.log(estudantes);
const alterarTurno = (alunoIndice, novoTurno) => {
    estudantes[alunoIndice].turno = novoTurno;
    console.log(estudantes[alunoIndice]);
};
alterarTurno(0, 'tarde');
