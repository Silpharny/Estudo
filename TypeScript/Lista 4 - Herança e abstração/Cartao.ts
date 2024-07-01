class Cartao {

    titular: string
    numero: number
    ativo: boolean
    cvv: number

    constructor(_titular: string, _numero: number, _ativo: boolean, _cvv: number) {
        this.titular = _titular
        this.numero = _numero
        this.ativo = _ativo
        this.cvv = _cvv
    }

    Cancelar(): void {
        this.ativo = false
        console.log('Cartão Cancelado!');
        
    }
}


//Herança - CartaoCredito vai herdar tudo de Cartao - Usar 'extends' + nome da classe que será herdada
class CartaoCredito extends Cartao {
    

    limite: number

    constructor(_titularSuper: string, _numeroSuper: number, _ativoSuper: boolean, _cvvSuper: number, _limite: number) {
        
        super(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper)

        this.limite = _limite
    }

    ConsultarLimite(): number {
        return this.limite
    }
}

let cartao2 = new CartaoCredito('Sil', 555, true, 123, 5000)


// Interface - Contrato - Muito usado para CRUD
// * Não está ligada a interface gráfica

interface ICartaoDebito {
    
    // Saldo - Atributo
    saldo: number
    
    // SubtrairSaldo - Método
    SubtrairSaldo(valor: number): number
}


class CartaoDebito extends Cartao implements ICartaoDebito {
    
    
    saldo: number = 8000
    SubtrairSaldo(valor: number): number {
        this.saldo = this.saldo - valor
        return this.saldo
    }

}

let cartao3 = new CartaoDebito("Sil", 999, true, 222)

console.log(cartao3.saldo)

cartao3.SubtrairSaldo(1000)

console.log(cartao3.saldo)