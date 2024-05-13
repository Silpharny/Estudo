"use strict";
let arr = [10, 12, 15, 20, 22];
const Soma = (arr) => {
    arr.forEach((value, i) => {
        const resultado = value + arr[i + 1];
        if (arr[i] <= 20) {
            let msg = `A soma entre ${value} + ${arr[i + 1]} = ${resultado}`;
            console.log(msg);
        }
    });
};
console.log(Soma(arr));
