let mensagem = document.querySelector("#mensagem")
let resposta = document.querySelector("#resposta")

const custom_style = {
    color: "red"
}


mensagem.addEventListener('keyup',() => 
    {
        if(mensagem.value.length >= 10) {
            mensagem.style.fontWeight = "bold"
        }
        console.log(mensagem.value.length);
    })