function Formulario() {
    let nome = document.querySelector("#nome_input").value
    let outputNome = document.querySelector("#nome_output")
    outputNome.textContent = nome

    let radioBtn = document.getElementsByName("sexo")
    let outputSexo = document.querySelector("#sexo_output")

    for (let i = 0; i < radioBtn.length; i++) {
        if(radioBtn[i].checked){
            
            radioBtn = radioBtn[i].value
            outputSexo.textContent = radioBtn
            
        } 
    }

    let idade = document.querySelector("#idade_input").value
    let outputIdade = document.querySelector("#idade_output")
    outputIdade.textContent = idade

    let altura = document.querySelector("#altura_input").value
    let outputAltura = document.querySelector("#altura_output")
    outputAltura.textContent = altura
    
    let peso = document.querySelector("#peso_input").value
    let outputPeso = document.querySelector("#peso_output")
    outputPeso.textContent = peso

    let outputImcDesejavel = document.querySelector("#imcDesejavel")
    outputImcDesejavel.textContent = "Entre 20 e 24"

    function CalcIMC() {
        
        let imc = peso / altura ** 2
        let resultadoImc = document.querySelector("#resultadoIMC")
        resultadoImc.textContent = imc.toFixed(2)

        function RiscosRecomendacao() {
            let outputRiscos = document.querySelector("#riscos")
            let outputRecomendacao = document.querySelector("#recomendacaoInicial")
    
            if(imc < 20) {
                
                outputRiscos.textContent = "Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso."

                outputRecomendacao.textContent = "Inclua  carboidratos  simples  em  sua  dieta,  além  de  proteínas  - indispensáveis para ganho de massa magra. Procure um profissional."
            
            } else if(imc >= 20 && imc <= 24.9) {
            
                outputRiscos.textContent = "Seu peso está ideal para suas referências."
            
                outputRecomendacao.textContent = "Mantenha uma dieta saudável e faça seus exames periódicos."
            
            } else if(imc >= 25 && imc <= 29.9) {
            
                outputRiscos.textContent = "Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares."
            
                outputRecomendacao.textContent = "Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante"
            
            } else if (imc >= 30 && imc <= 35.9) {
            
                outputRiscos.textContent = "Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade."
            
                outputRecomendacao.textContent = "Adote uma dieta alimentar rigorosa, com o acompanhamento de um nutricionista e um médico especialista (endócrino)."
            
            } else if (imc > 35) {
            
                outputRiscos.textContent = "O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas."
            
                outputRecomendacao.textContent = "Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino)."
            
            }
        }

        RiscosRecomendacao()
    }

    function Categoria() {
        
        let outputCategoria = document.querySelector("#categoria_output")
        
        if (idade < 12) {
            outputCategoria.textContent = "infantil"
        } else if (idade >= 12 && idade <= 20) {
            outputCategoria.textContent = "Juvenil"
        } else if (idade >= 21 && idade <= 65) {
            outputCategoria.textContent = "Adulto"
        } else if (idade > 65) {
            outputCategoria.textContent = "Idoso"
        }
    }

    let mostrarResposta = document.querySelector("#resultado")
    mostrarResposta.style.display = 'flex'

    CalcIMC()
    Categoria()

}