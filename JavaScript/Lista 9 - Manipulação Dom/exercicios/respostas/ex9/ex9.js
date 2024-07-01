let nome = document.querySelector("#nome")
let idade = document.querySelector("#idade")
let botao = document.querySelector("#botao")
let respostaNome = document.querySelector("#respostaNome")
let respostaNomeLive = document.querySelector("#respostaNomeLive")
let respostaIdade = document.querySelector("#respostaIdade")
let respostaIdadeLive = document.querySelector("#respostaIdadeLive")



nome.addEventListener('keyup', salvarDado = () => {
    respostaNomeLive.textContent = nome.value
    botao.removeAttribute('disabled')
    
})

idade.addEventListener('keyup', salvarDado = () => {
    respostaIdadeLive.textContent = idade.value
    botao.removeAttribute('disabled')
})

const salvarDdosBotao = () => {
    let respostaIptNome = document.createElement('p') 
    respostaIptNome.textContent = nome.value
    respostaNome.appendChild(respostaIptNome)

    let respostaIptIdade = document.createElement('p')
    respostaIptIdade.textContent = idade.value
    respostaIdade.appendChild(respostaIptIdade)

    nome.value = ''
    idade.value = ''
}

botao.addEventListener('click', salvarDdosBotao)


botao.setAttribute('disabled','')