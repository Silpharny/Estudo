class Carro {

    cor:string
    marca:string
    placa:string

    constructor( _cor:string, _marca:string, _placa:string) {
        this.cor = _cor
        this.marca = _marca
        this.placa = _placa
    }

    
}

let carros:Array<Carro> = []


const inserirCarros = () => {
    carros.push(new Carro ("Vermelho", "FIAT", "ABY6643"))
    carros.push(new Carro ("Preto", "BMW", "TRY1433"))
    carros.push(new Carro ("Branco", "Ford", "UTF9723"))
}

const listarPlacas = () => {
    inserirCarros()

    for (let i = 0; i < carros.length; i++) {
        console.log(`A placa do carro ${i + 1} é igual a: ${carros[i].placa}`);
    }
}

console.log(listarPlacas());

const modificarCor = (i:number, mudarCor:string) => {
    carros[i].cor = mudarCor

    console.log(carros[i]);
}

console.log(modificarCor(2, "Laranja"));