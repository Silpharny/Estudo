class Cartao {

    // Atributos - Características
    titular: string = 'Sil'
    numero: number = 999999999
    ativo: boolean = true
    cvv: number = 999


    // Métodos - Funções - Ações
    cancelar(): void {
        this.ativo = false
        console.log('Cartão cancelado!');
    }
}

//  Instância - Criação do objeto
let cartao = new Cartao()
cartao.titular = 'Sil Miranda'
cartao.cancelar()

console.log(cartao);
console.log(cartao.titular);