"use strict";
// Encapsulamento - Poder esconder ou ocultar informações dentro de subclasses ou instâncias
// Modificador de acesso: public, protected, readonly
// Leitura e escrita: get, set
class Cartao {
    get Idade() {
        return this._idade;
    }
    set Idade(valor) {
        this._idade = valor;
    }
    constructor(_titular, _numero, _ativo, _cvv) {
        // GET - Permissão leitura
        // SET - Permissão de escrita
        this._idade = 19;
        this.titular = _titular;
        this.numero = _numero;
        this.ativo = _ativo;
        this.cvv = _cvv;
    }
}
class CartaoCredito extends Cartao {
    constructor(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper, _limite) {
        super(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper);
        this.numero = 12344; // Só consigo modificar um atributo com a tag 'protected' através de sua classe filha(CartaoCredito). Caso eu tente criar um novo cartão, não será possível fazer a modificação diretamente
        this.limite = _limite;
    }
}
let cartao = new Cartao('sil', 123123, true, 231);
