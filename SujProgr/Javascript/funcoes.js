// Função sem argumentos
function carro(){
    
    console.log("10km");
}

carro()

// Função com argumentos
function media(num1, num2) {

    return num1 + num2 / 2
    
}


//Função que chama outra função e passa argumentos
function aluno(nome, materia, numX, numY){
    
    const sum = media(numX,numY)
    
    if(sum >= 6) {
        return console.log(`${nome} aprovado em ${materia} com média ${sum}`);

    } else if(sum < 6) {
        return console.log(`${nome} reprovado em ${materia} com media ${sum}`)
    }
}

aluno('João', 'Biologia', 1, 1)