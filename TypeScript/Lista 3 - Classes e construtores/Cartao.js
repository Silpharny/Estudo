"use strict";
class Cartao {
    constructor() {
        // Atributos - Características
        this.titular = 'Sil';
        this.numero = 999999999;
        this.ativo = true;
        this.cvv = 999;
    }
    // Métodos - Funções - Ações
    cancelar() {
        this.ativo = false;
        console.log('Cartão cancelado!');
    }
}
//  Instância - Criação do objeto
let cartao = new Cartao();
cartao.titular = 'Sil Miranda';
cartao.cancelar();
console.log(cartao);
console.log(cartao.titular);
