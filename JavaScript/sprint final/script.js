const nick = document.querySelector("#nick")
const interval = document.querySelector("#interval")


const start = document.querySelector("#btnStart")

const welcome = document.querySelector("#welcome")
const number = document.querySelector("#number")
const play = document.querySelector("#btnPlay")
const message = document.querySelector("#message")
const attempt = document.querySelector("#attempt")

const btnReload = document.querySelector("#btnReload")


let currentAttempt = 1
let maximumAttempt = 3

const salutation = () => {
    welcome.innerHTML =
    `
    <p id="welcomeTxt">Olá <span>${nick.value}</span>, vamos jogar! <br> De acordo com a opção de intervalo que você escolheu, descubra o número.</p>
    `

    num = randomNum()
}

start.addEventListener('click',salutation)

let num 

const randomNum = () => {
    if(interval[0].selected) {
        return num = Math.floor(Math.random() * 10)
    }
    
    if(interval[1].selected) {
        return num = Math.floor(Math.random() * 100)
    }
    
    if(interval[2].selected) {
        return num = Math.floor(Math.random() * 200)
    }
}


const printMessage = () => {
    if(currentAttempt <= maximumAttempt) {

        if (number.value == num) {
            message.textContent = "Parabéns,  você  conseguiu  adivinhar"
            
        }
        
        if (number.value > num) {
            message.textContent = "O número é Menor"
            
        }
        
        if (number.value < num) {
            message.textContent = "O número é Maior"
            
        }
    
        attempt.innerHTML = `Você ainda tem ${maximumAttempt - currentAttempt} tentativas`
        
        currentAttempt += 1
    } else {
        attempt.innerHTML = 
        `
        <p>Você atingiu o número máximo de tentativas</p>
        <br>
        <p>O número sorteado era: <span>${num}</span></p>
        `
    }
}

play.addEventListener('click', printMessage)