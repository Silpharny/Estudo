function Formulario(){

    let resultado = document.querySelector("#resultado")
    resultado.style.display = "flex"

    let nome = document.querySelector("#nome").value
    let outputNome = document.querySelector("#nomeOutput")
    outputNome.textContent = nome

    let radioBtn = document.getElementsByName("sexo")
    let radioOutput = document.querySelector("#sexoOutput")

    for(let i = 0; i < radioBtn.length; i++) {
        if (radioBtn[i].checked) {
            let checkSexo = radioBtn[i].value

            radioOutput.textContent = checkSexo
        }
    }

    let idadeInput = document.querySelector("#idade").value
    let idade = document.querySelector("#idadeOutput")
    idade.textContent = idadeInput

    let rendaMensalInput = document.querySelector("#rendaMensal").value
    let rendaMensal = document.querySelector("#rendaMensalOutput")
    rendaMensal.textContent = rendaMensalInput

    let perfilInvestidorInput = document.querySelector("#perfilInvestidor")
    let perfilInvestidor = document.querySelector("#perfilInvestidorOutput")
    
    let sugestaoInvestimentoOutput = document.querySelector("#sugestaoInvestimentoOutput")
        
    if(perfilInvestidorInput[0].selected || perfilInvestidorInput[2].selected) {
        sugestaoInvestimentoOutput.textContent = "Renda variável"
        perfilInvestidor.textContent = perfilInvestidorInput.value
    
    } else if (perfilInvestidorInput[1].selected) {
        sugestaoInvestimentoOutput.textContent = "Renda fixa e variável"
        perfilInvestidor.textContent = perfilInvestidorInput.value
    
    } else if (perfilInvestidorInput[3].selected || perfilInvestidorInput[4].selected) {
        sugestaoInvestimentoOutput.textContent = "Renda Fixa"
        perfilInvestidor.textContent = perfilInvestidorInput.value
    }
           
    

    function CalcularJuros(){
        let jurosSimples, jurosCompostos

        let tempoInvestimento = document.querySelector("#tempoInvestimento").value

        let lucroSimples = document.querySelector("#lucroSimplesPossivelOutput")
        let lucroComposto = document.querySelector("#lucroCompostoPossivelOutput")
    
        jurosSimples = rendaMensalInput * 0.01 * tempoInvestimento
        jurosCompostos = (rendaMensalInput * (1 + 0.01) ** tempoInvestimento) - rendaMensalInput
        
        console.log(jurosSimples);
        console.log(jurosCompostos);
        
        lucroSimples.textContent = `R$ ${jurosSimples.toFixed(2)} em ${tempoInvestimento} Meses`
        lucroComposto.textContent = `R$ ${jurosCompostos.toFixed(2)} em ${tempoInvestimento} Meses`
    }
    CalcularJuros()
}