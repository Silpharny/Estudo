"use strict";
class newPessoa {
    constructor(nome, dataNascimento, altura) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.altura = altura;
        this.calcularIdade = () => {
            let dataAtual = new Date();
            let anoAtual = dataAtual.getFullYear();
            let mesAtual = dataAtual.getMonth();
            let diaAtual = dataAtual.getDate();
            let idade = anoAtual - this.dataNascimento.getFullYear();
            if (mesAtual < (this.dataNascimento.getMonth() - 1)) {
                idade--;
            }
            if (((this.dataNascimento.getMonth() - 1) == mesAtual) && (diaAtual < this.dataNascimento.getDate())) {
                idade--;
            }
            return idade;
        };
    }
    get _nome() {
        return this.nome;
    }
    set _nome(__nome) {
        this.nome = __nome;
    }
    get _dataNascimento() {
        return this.dataNascimento;
    }
    set _dataNascimento(__dataNascimento) {
        this.dataNascimento = __dataNascimento;
    }
    get _altura() {
        return this.altura;
    }
    set _altura(__altura) {
        this.altura = __altura;
    }
    toString() {
        return `Nome: ${this.nome}, Data de Nascimento: ${this.dataNascimento}, Altura: ${this.altura}`;
    }
}
