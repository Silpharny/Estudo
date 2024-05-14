"use strict";
class Carro {
    constructor(_cor, _marca, _placa) { }
}
let carros = [];
const inserirCarros = () => {
    carros[0] = new Carro("Vermelho", "FIAT", "ABY6643");
    carros[1] = new Carro("Preto", "BMW", "TRY1433");
    carros[2] = new Carro("Branco", "Ford", "UTF9723");
};
const listarPlacas = () => {
    carros.forEach((e, i) => {
        console.log(`Placa do carro ${i + 1}: ${e.}`);
    });
};
const modificarCor = (index, novaCor) => {
    carros[index]._cor = novaCor;
};
