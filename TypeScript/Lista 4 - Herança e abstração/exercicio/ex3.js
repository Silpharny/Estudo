"use strict";
class Animais {
    constructor(_porte, _idade, _peso) {
        this.porte = _porte;
        this.idade = _idade;
        this.peso = _peso;
    }
}
class Felino extends Animais {
    constructor(_porteSuper, _idadeSuper, _pesoSuper, _tipoFelino) {
        super(_porteSuper, _idadeSuper, _pesoSuper);
        this.tipoFelino = _tipoFelino;
    }
    AfiarGarras() {
        console.log(`${this.tipoFelino} Afiando as garras!!!`);
    }
    Dormir() {
        console.log(`${this.tipoFelino} Está dormindo...zzz`);
    }
}
let newFelino = [];
const adicionarFelino = () => {
    newFelino.push(new Felino('Pequeno', 2, 12, 'Gato'));
    newFelino.push(new Felino('Grande', 2, 12, 'Puma'));
};
const isDormindo = (isDormindo) => {
    adicionarFelino();
    for (let i = 0; i < newFelino.length; i++) {
        if (isDormindo == true) {
            newFelino[i].Dormir();
        }
        else {
            newFelino[i].AfiarGarras();
        }
    }
};
console.log(isDormindo(false));
