
// Declaração de uma função comum
function DizerOlaMundo() {
    
    return "Olá Mundo!"
}

// -------------------------------- -------------------------------- --------------------------------

// Arrow functions / Função Seta
const DizerOlaMundoNovamente = () => "Olá mundo novamente!" // Retorno de uma linha, quando tem apenas um algoritmo para executar

// -------------------------------- -------------------------------- --------------------------------

const DizerOlaMundoEmIngles = () => {
    return "Hello World!"
}

// -------------------------------- -------------------------------- --------------------------------

// Recepcionar novas pessoas
const Recepcionar = (nome, sobrenome) => `Olá ${nome} ${sobrenome}` 

// -------------------------------- -------------------------------- --------------------------------

console.log(DizerOlaMundoNovamente());
console.log(DizerOlaMundo())
console.log(DizerOlaMundoEmIngles());
console.log(Recepcionar("Sil", "Miranda"));