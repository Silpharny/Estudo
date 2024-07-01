"use strict";
//Tipo Any (aceita qualquer coisa vindo nele)
let documento = '000.000.000-00';
// Posso atribuir valores de diferentes tipos nessa variável
documento = 3;
// Funções
const Somar = (n1, n2) => {
    return n1 + n2;
};
let numSomado = Somar(2, 8);
console.log(numSomado);
// Void(vazio) - Retorno de Funções, ou seja, nem sempre precisamos retornar algo
const DarBoasVindas = () => {
    console.log('Olá');
};
DarBoasVindas();
