const nick = document.querySelector("#nick")
const interval = document.querySelector("#interval")
const start = document.querySelector("#btnStart")

const welcome = document.querySelector("#welcome")
const number = document.querySelector("#number")
const attempt = document.querySelector("#attempt")
const play = document.querySelector("#btnPlay")

let randomNum 



nick.addEventListener('input', () => {
    welcome.innerHTML =
        `
        <p id="welcomeTxt">Olá <span>${nick.value}</span>, vamos jogar! <br> De acordo com a opção de intervalo que você escolheu, descubra o número.</p>
        `
})

const select = () => {

    if(interval.value == 'opt1') {
        attempt.textContent = "1 a 10"
        randomNum = Math.floor(Math.random() * 10)
    }
    
    if(interval.value == 'opt2') {
        attempt.textContent = "1 a 100"
        randomNum = Math.floor(Math.random() * 100)
    }
    
    if(interval.value == 'opt3') {
        attempt.textContent = "1 a 200"
        randomNum = Math.floor(Math.random() * 200)
    }
}

start.addEventListener('click', select)