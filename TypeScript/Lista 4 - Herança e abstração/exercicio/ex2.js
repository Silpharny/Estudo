"use strict";
class Carro {
    constructor(_cor, _marca, _placa) {
        this.cor = _cor;
        this.marca = _marca;
        this.placa = _placa;
    }
}
let carros = [];
const inserirCarros = () => {
    carros.push(new Carro("Vermelho", "FIAT", "ABY6643"));
    carros.push(new Carro("Preto", "BMW", "TRY1433"));
    carros.push(new Carro("Branco", "Ford", "UTF9723"));
};
const listarPlacas = () => {
    inserirCarros();
    for (let i = 0; i < carros.length; i++) {
        console.log(`A placa do carro ${i + 1} é igual a: ${carros[i].placa}`);
    }
};
console.log(listarPlacas());
const modificarCor = (i, mudarCor) => {
    carros[i].cor = mudarCor;
    console.log(carros[i]);
};
console.log(modificarCor(2, "Laranja"));
