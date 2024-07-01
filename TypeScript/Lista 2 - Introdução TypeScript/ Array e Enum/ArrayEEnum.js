"use strict";
// Array
let placar1 = [1, 10, 2]; /* OU */
let placar2 = [2, 4];
// Tupla - Array Misto 
// Dados de um aluno: Nome, nota, aprovado
let minhaTupla = ['Priscila', 9, true];
// Enums - Máquina de Estados
var Acoes;
(function (Acoes) {
    Acoes[Acoes["correr"] = 0] = "correr";
    Acoes[Acoes["pular"] = 1] = "pular";
    Acoes[Acoes["defender"] = 2] = "defender";
    Acoes[Acoes["atacar"] = 3] = "atacar";
})(Acoes || (Acoes = {}));
// Vamos supor que eu esteja fazendo um formulário, as respostas só poderam ser não ou sim
var Respostas;
(function (Respostas) {
    Respostas[Respostas["nao"] = 0] = "nao";
    Respostas[Respostas["sim"] = 1] = "sim";
})(Respostas || (Respostas = {}));
let acaoAtual = Acoes.atacar;
console.log(acaoAtual);
