"use strict";
// Fórmula de área do retângulo -   a(área) = b(base)*h(altura)
const CalcularArea = (b, h) => {
    let areaTotal = b * h;
    let area = `A área do retângulo é igual a: ${areaTotal}`;
    return area;
};
console.log(CalcularArea(2, 5));
