// Encapsulamento - Poder esconder ou ocultar informações dentro de subclasses ou instâncias

// Modificador de acesso: public, protected, readonly
// Leitura e escrita: get, set

class Cartao {

    public titular: string
    protected numero: number    // Consigo chamar nas classes filhas mas não consigo alterar nas instâncias do objeto
    private ativo: boolean      // Consigo chamar apenas nessa classe
    readonly cvv: number        // Somente leitura, não é possível atribuir novos valores. read = leitura only = somente.

    // GET - Permissão leitura
    // SET - Permissão de escrita
    private _idade:number = 19

    get Idade():number {
        return this._idade
    }

    set Idade(valor:number) {
        this._idade = valor
    }

    constructor(_titular:string, _numero:number, _ativo:boolean, _cvv:number) {
        this.titular = _titular
        this.numero = _numero
        this.ativo = _ativo
        this.cvv = _cvv
    }
}

class CartaoCredito extends Cartao {
    limite: number
    numero = 12344 // Só consigo modificar um atributo com a tag 'protected' através de sua classe filha(CartaoCredito). Caso eu tente criar um novo cartão, não será possível fazer a modificação diretamente

    constructor(_titularSuper:string, _numeroSuper:number, _ativoSuper:boolean, _cvvSuper:never, _limite:number) {
        super(_titularSuper,_numeroSuper,_ativoSuper,_cvvSuper)
        this.limite = _limite
    }
}

let cartao = new Cartao('sil', 123123, true, 231)
