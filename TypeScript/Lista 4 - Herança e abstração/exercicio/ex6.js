"use strict";
class Funcionario {
    constructor(nome, sobrenome, salario) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.salario = salario;
        this.aumentoSalario = () => {
            return this.salario += (this.salario * 0.1);
        };
    }
    get _nome() {
        return this.nome;
    }
    set _nome(__nome) {
        this.nome = __nome;
    }
    get _sobrenome() {
        return this.sobrenome;
    }
    set _sobrenome(__sobrenome) {
        this.sobrenome = __sobrenome;
    }
    get _salario() {
        return this.salario;
    }
    set _salario(__salario) {
        this.salario = __salario;
    }
}
let funcionario = [];
const addFuncionario = (nome, sobrenome, salario) => {
    let newFuncionario = new Funcionario(nome, sobrenome, salario);
    newFuncionario.aumentoSalario();
    funcionario.push(newFuncionario);
};
addFuncionario('Sil', 'Miranda', 10000);
addFuncionario('Mario', 'Junior', 5000);
addFuncionario('Julia', 'Mariano', 3000);
console.log(funcionario);
