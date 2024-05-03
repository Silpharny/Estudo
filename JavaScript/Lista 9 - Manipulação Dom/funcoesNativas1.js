// Funções nativas do JavaScript

// ID
let elemento1 = document.getElementById('cpf')
console.log(elemento1.value);

// CLASS
let elemento2 = document.getElementsByClassName('documento')
console.log(elemento2);

// SELETOR PADRÃO - querySelector
let elemento3 = document.querySelector('#rg')
console.log(elemento3.value);

let elemento4 = document.querySelectorAll('.documento') // Quando eu coloco o ALL, pego todos os elementos da classe 