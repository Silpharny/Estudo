class Funcionario {

    constructor(private nome:string, private sobrenome:string, private salario:number) {}

    get _nome() {
        return this.nome
    }

    set _nome(__nome:string) {
        this.nome = __nome
    }

    get _sobrenome() {
        return this.sobrenome
    }

    set _sobrenome(__sobrenome:string) {
        this.sobrenome = __sobrenome
    }

    get _salario() {
        return this.salario
    }

    set _salario(__salario:number) {
        this.salario = __salario
    }

    aumentoSalario = (): number => {
       return this.salario += (this.salario * 0.1)
    }
 }

let funcionario: Funcionario[] = []

const addFuncionario = (nome:string, sobrenome:string, salario:number) => {
    
    let newFuncionario = new Funcionario(nome, sobrenome, salario)

    newFuncionario.aumentoSalario()
    
    funcionario.push(newFuncionario)
}

addFuncionario('Sil', 'Miranda', 10000)
addFuncionario('Mario', 'Junior', 5000)
addFuncionario('Julia', 'Mariano', 3000)

console.log(funcionario)