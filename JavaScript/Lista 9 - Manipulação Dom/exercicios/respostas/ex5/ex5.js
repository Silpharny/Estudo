let inputCelsius = document.querySelector('#Celsius')
let botaoCelsius = document.querySelector('#botaoCelsius')
let respostaCelsius = document.querySelector('#resultadoCelsius')

let inputFahrenheit = document.querySelector('#Fahrenheit')
let botaoFahrenheit = document.querySelector('#botaoFahrenheit')
let respostaFahrenheit = document.querySelector('#resultadoFahrenheit')

const toCelsius = () => 
    {
        let conversor = (inputCelsius.value * 5/9) + 32
        respostaCelsius.textContent = conversor.toFixed(1) + " ºF"
    }
botaoCelsius.addEventListener('click', toCelsius)

const toFahrenheit = () =>
    {
        let conversor = (inputFahrenheit.value - 32) * 5/9
        respostaFahrenheit.textContent = conversor.toFixed(1) + " ºC"
        
    }
botaoFahrenheit.addEventListener('click', toFahrenheit)