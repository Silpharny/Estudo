"use strict";
//4 - Crie e compile um script que receba a data de aniversário de uma pessoa e informe se ela já fez aniversario nesse ano.
// data - data atual
const VerificarAniversario = (mesAniversario) => {
    let mesAtual = new Date().getMonth() + 1;
    if (mesAniversario < mesAtual) {
        console.log('Já fez aniverário');
    }
    else if (mesAniversario == mesAtual) {
        console.log('Faz esse mês');
    }
    else {
        console.log('Ainda não fez aniversário');
    }
    console.log(`Estamos no mês: ${mesAtual}`);
    console.log(`Seu aniversário é no mês: ${mesAniversario}`);
};
console.log(VerificarAniversario(1));
