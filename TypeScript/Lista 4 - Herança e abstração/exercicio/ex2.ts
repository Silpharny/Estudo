class Carro 
{
    constructor(private cor:string, private marca:string, private placa:string)
    {}

    public get _cor() {
        return this.cor;
    }

    public set _cor(__cor: string)
    {
        this.cor = __cor;
    }

    public get _marca() {
        return this.marca;
    }

    public set _marca(__marca: string)
    {
        this.marca = __marca;
    }

    public get _placa() {
        return this.placa;
    }

    public set _placa(__placa: string)
    {
        this.placa = __placa;
    }
}

let carros:Array<Carro> = []

const inserirCarros = () => {

    carros[0] = new Carro("Vermelho", "FIAT", "ABY6643");
    carros[1] = new Carro("Preto", "BMW", "TRY1433");
    carros[2] = new Carro("Branco", "Ford", "UTF9723");
}

const listarPlacas = () => {
    carros.forEach((e, i) => {
        console.log(`Placa do carro ${i + 1}: ${e._placa}`);
    });
}
 
const modificarCor = (index:number, novaCor:string) =>
{
    carros[index]._cor = novaCor;
}
