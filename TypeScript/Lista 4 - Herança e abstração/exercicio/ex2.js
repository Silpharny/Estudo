"use strict";
class Carro {
    constructor(cor, marca, placa) {
        this.cor = cor;
        this.marca = marca;
        this.placa = placa;
    }
    get _cor() {
        return this.cor;
    }
    set _cor(__cor) {
        this.cor = __cor;
    }
    get _marca() {
        return this.marca;
    }
    set _marca(__marca) {
        this.marca = __marca;
    }
    get _placa() {
        return this.placa;
    }
    set _placa(__placa) {
        this.placa = __placa;
    }
}
let carros = [];
const inserirCarros = () => {
    carros[0] = new Carro("Vermelho", "FIAT", "ABY6643");
    carros[1] = new Carro("Preto", "BMW", "TRY1433");
    carros[2] = new Carro("Branco", "Ford", "UTF9723");
};
const listarPlacas = () => {
    carros.forEach((e, i) => {
        console.log(`Placa do carro ${i + 1}: ${e._placa}`);
    });
};
const modificarCor = (index, novaCor) => {
    carros[index]._cor = novaCor;
};
