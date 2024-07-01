"use strict";
class Cartao {
    constructor(_titular, _numero, _ativo, _cvv) {
        this.titular = _titular;
        this.numero = _numero;
        this.ativo = _ativo;
        this.cvv = _cvv;
    }
    Cancelar() {
        this.ativo = false;
        console.log('Cartão Cancelado!');
    }
}
//Herança - CartaoCredito vai herdar tudo de Cartao - Usar 'extends' + nome da classe que será herdada
class CartaoCredito extends Cartao {
    constructor(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper, _limite) {
        super(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper);
        this.limite = _limite;
    }
    ConsultarLimite() {
        return this.limite;
    }
}
let cartao2 = new CartaoCredito('Sil', 555, true, 123, 5000);
class CartaoDebito extends Cartao {
    constructor() {
        super(...arguments);
        this.saldo = 8000;
    }
    SubtrairSaldo(valor) {
        this.saldo = this.saldo - valor;
        return this.saldo;
    }
}
let cartao3 = new CartaoDebito("Sil", 999, true, 222);
console.log(cartao3.saldo);
cartao3.SubtrairSaldo(1000);
console.log(cartao3.saldo);
