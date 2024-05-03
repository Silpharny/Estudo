let mensagem = document.querySelector("#mensagem")
let botao = document.querySelector("#botao")
let resposta = document.querySelector("#resposta")




const QuantidadeCaracteres = () => {
    resposta.innerHTML = mensagem.value.length

}

botao.addEventListener('click', QuantidadeCaracteres)