let btn = document.querySelector("#btn")
let contador = document.querySelector("#contador")

let tentativaAtual = 1
let tentativaMax = 3

const contar = () => {
    if(tentativaAtual <= tentativaMax) {
        contador.textContent = 'ainda'
        tentativaAtual += 1
    } else {
        contador.textContent = 'max'

    }

}

btn.addEventListener('click', contar)