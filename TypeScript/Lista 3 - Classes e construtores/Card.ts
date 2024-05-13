// Usando o constructor -> Posso suar para criar atributos sem dar valores a ele

class Card {

    // Atributos - Características
    titular: string 
    numero: number 
    ativo: boolean 
    cvv: number

    // Constructor
    constructor(_titular: string, _numero: number, _ativo: boolean, _cvv: number) {
        this.titular = _titular
        this.numero = _numero
        this.ativo = _ativo
        this.cvv = _cvv 
    }

    // Métodos - Funções - Ações
    cancelar(): void {
        this.ativo = false
        console.log('Cartão cancelado!');
    }
}

//  Instância - Criação do objeto
let cartao1 = new Card('sil', 99999, true, 999)
cartao1.titular = 'Sil Miranda'

console.log(cartao1.titular);
