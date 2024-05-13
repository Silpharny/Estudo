//Tipo Any (aceita qualquer coisa vindo nele)

let documento: any = '000.000.000-00'
// Posso atribuir valores de diferentes tipos nessa variável
documento = 3



// Funções
const Somar = (n1:number, n2:number): number => {
    return n1 + n2
}
let numSomado: number = Somar(2,8)
console.log(numSomado);


// Void(vazio) - Retorno de Funções, ou seja, nem sempre precisamos retornar algo
const DarBoasVindas = (): void => {
    console.log('Olá');
}
DarBoasVindas()