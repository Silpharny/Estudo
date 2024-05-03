let palavra = document.querySelector("#palavra")
let botao = document.querySelector("#botao")
let resposta = document.querySelector("#resposta")


const inverter = () => {

    palavraInvertida = palavra.value.split('').reverse().join('')

    resposta.textContent = palavraInvertida


}

botao.addEventListener('click', inverter)