class Carro {
    constructor( _cor:string, _marca:string, _placa:string) {}
}

let carros:Array<Carro> = []

const inserirCarros = () => {

    carros[0] = new Carro("Vermelho", "FIAT", "ABY6643");
    carros[1] = new Carro("Preto", "BMW", "TRY1433");
    carros[2] = new Carro("Branco", "Ford", "UTF9723");
}

/*

const listarPlacas = () => {
    carros.forEach((e, i) => {
        console.log(`Placa do carro ${i + 1}: ${e.}`);
    });
}
 
const modificarCor = (index:number, novaCor:string) =>
{
    carros[index]._cor = novaCor;
}

*/