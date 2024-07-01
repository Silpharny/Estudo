"use strict";
class Cartao {
    constructor(_titular, _numero, _ativo, _cvv) {
        this.titular = _titular;
        this.numero = _numero;
        this.ativo = _ativo;
        this.cvv = _cvv;
    }
    // Método - Função - Ação
    Cancelar() {
        this.ativo = false;
        console.log('Cartão Cancelado!');
    }
}
// Polimorfismo - Muitas formas - Capacidade de alterar comportamento de métodos
// Sobrescrita de método de mesmo nome
// Sobrecarga - Não está disponível no Typescript
class CartaoCredito extends Cartao {
    constructor(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper, _limite) {
        super(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper);
        this.limite = _limite;
    }
    ConsultarLimite() {
        return this.limite;
    }
    // Sobrescrita - Vai pegar o método cancelar da class Cartao e vai modificar a mensagem 
    Cancelar() {
        console.log('Agora seu cartão de crédito foi cancelado');
    }
}
let cartao = new CartaoCredito('Sil', 123123123, true, 123, 10000);
cartao.Cancelar();
