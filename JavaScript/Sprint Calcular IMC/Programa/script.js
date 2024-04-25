let nome = document.querySelector('#nome')
nome.textContent = "Maria"


function CalcularIMC(peso, altura) {
    
    
    let imcCalc = peso / (altura ** 2)
    
    let imc = document.querySelector('#resultadoIMC')
    imc.textContent = imcCalc
}

function Categoria(idade) {
    let idade = 

}


console.log(CalcularIMC(50, 2))