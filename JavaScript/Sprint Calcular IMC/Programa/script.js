/*
let form = document.querySelector("form")
let nome = document.querySelector("#nome_input")

form.addEventListener("submit", function(event){
    event.preventDefault()

    let input = nome.value

    let output = document.querySelector("#nome_output")
    output.textContent = input
}) 

*/

function Nome(){
    let nome = document.querySelector("#nome_input").value
    let output = document.querySelector("#nome_output")
    output.textContent = nome
}

function Sexo(){
    let radioBtn = document.getElementsByName("sexo")
    let output = document.querySelector("#sexo_output")

    for (let i = 0; i < radioBtn.length; i++) {
        if(radioBtn[i].checked){
            
            radioBtn = radioBtn[i].value
            output.textContent = radioBtn
            
        } 
    }
  
}

function Idade(){
    let idade = document.querySelector("#idade_input").value
    let output = document.querySelector("#idade_output")
    output.textContent = idade
}

function Altura(){
    let altura = document.querySelector("#altura_input").value
    let output = document.querySelector("#altura_output")
    output.textContent = altura
}

function Peso(){
    let peso = document.querySelector("#peso_input").value
    let output = document.querySelector("#peso_output")
    output.textContent = peso
}

function Formulario() {
    Nome()
    Sexo()
    Idade()
    Altura()
    Peso()
}