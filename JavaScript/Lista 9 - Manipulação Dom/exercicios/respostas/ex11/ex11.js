let mensagem = document.querySelector("#mensagem")
let resposta = document.querySelector("#resposta")


mensagem.addEventListener('keyup',() => 
    {
        if(mensagem.value.length == 10) {
            mensagem.maxLength = 10
        }
        console.log(mensagem.value.length);
    })