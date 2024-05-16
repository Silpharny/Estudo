class Pessoa {
    nome:string
    endereco:string
    cpf:string

    constructor(_nome:string, _endereco:string, _cpf:string) {
        this.nome = _nome
        this.endereco = _endereco
        this.cpf = _cpf
    }
}

class Estudante extends Pessoa {
    turma:string
    turno:string

    constructor(_nomeSuper:string, _enderecoSuper:string, _cpfSuper:string, _turma:string, _turno:string) {
        super(_nomeSuper, _enderecoSuper, _cpfSuper)

        this.turma = _turma
        this.turno = _turno
    }
}

let estudantes: Estudante[] = []

const addEstudante = (nome:string, endereco:string, cpf:string, turma:string, turno:string) => {
    
    let estudante = new Estudante(nome,endereco,cpf,turma,turno)
    estudantes.push(estudante)
}

addEstudante('sil', 'rua a', '123', 'turma a', 'manhã')
addEstudante('Laura', 'rua b', '321', 'turma b', 'tarde')
addEstudante('Vitor', 'rua c', '456', 'turma a', 'manhã')
addEstudante('Marcos', 'rua d', '654', 'turma b', 'noite')
addEstudante('Aline', 'rua e', '789', 'turma a', 'tarde')

console.log(estudantes);

const alterarTurno = (alunoIndice:number, novoTurno:string) => {
    
    estudantes[alunoIndice].turno = novoTurno

    console.log(estudantes[alunoIndice]);    
}

alterarTurno(0,'tarde')