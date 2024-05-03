
let botao       = document.querySelector("#adicionar") // Pegando o elemento botão do HTML
let contador    = document.querySelector("#contador") // Pegando a div do HTML
let manual      = document.querySelector(".manual") // Pegando o input do HTML


const Somar = () => {
    // Pegar o que está dentro da tag(div) - Para isso utilizaremos o  InnerHTML (string)
    // Converter string para Int - ParseInt
    contador.innerHTML = parseInt(contador.innerHTML) + 1
}

// Evento de manipulação
// Evento -> Ação
botao.addEventListener('click', Somar)

manual.addEventListener('input', () => {
    contador.innerHTML = manual.value
})