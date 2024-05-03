let peso = document.querySelector("#peso")
let altura = document.querySelector("#altura")
let botao = document.querySelector("#botao")
let resposta = document.querySelector("#resposta")


const imc = () => resposta.textContent = (peso.value / (altura.value / 100) ** 2).toFixed(1)

botao.addEventListener('click', imc)
