"use strict";
let arr = [10, 12, 15, 20, 22];
const Soma = (num) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let num1 = arr[i];
        let num2 = arr[i + 1];
        const resultado = num1 + num2;
        console.log(`A soma entre ${num1} + ${num2} é igual a: ${resultado}`);
    }
};
console.log(Soma(arr));
