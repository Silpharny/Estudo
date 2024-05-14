class Cartao {

    titular: string
    numero: number 
    ativo: boolean 
    cvv: number

    constructor(_titular:string,_numero:number,_ativo:boolean,_cvv:number) {
        this.titular = _titular
        this.numero = _numero
        this.ativo = _ativo
        this.cvv = _cvv
    }

    // Método - Função - Ação
    Cancelar():void {
        this.ativo = false
        console.log('Cartão Cancelado!');
    }
}

// Polimorfismo - Muitas formas - Capacidade de alterar comportamento de métodos
// Sobrescrita de método de mesmo nome
// Sobrecarga - Não está disponível no Typescript

class CartaoCredito extends Cartao {

    limite:number

    constructor(_titularSuper:string,_numeroSuper:number,_ativoSuper:boolean,_cvvSuper:number, _limite:number) {
        
        super(_titularSuper,_numeroSuper,_ativoSuper,_cvvSuper)
        
        this.limite = _limite
    }

    ConsultarLimite():number {
        return this.limite
    }

    // Sobrescrita - Vai pegar o método cancelar da class Cartao e vai modificar a mensagem 
    Cancelar(): void {
        console.log('Agora seu cartão de crédito foi cancelado');
    }
}

let cartao = new CartaoCredito('Sil', 123123123, true, 123, 10000)

cartao.Cancelar()