class JogadorFutebol {
    nome: string
    posicao: string
    dataNascimento: Date
    nacionalidade: string
    altura: number
    peso: number

    constructor(_nome: string,_posicao: string, _dataNascimento: Date, _nacionalidade: string, _altura: number, _peso: number) {
        this.nome = _nome
        this.posicao = _posicao
        this.dataNascimento = _dataNascimento
        this.nacionalidade = _nacionalidade
        this.altura = _altura
        this.peso = _peso
    }

    calcularIdade = (dataNascimento:Date) => {

    }

    aposentadoria = () => {
        
    }
}