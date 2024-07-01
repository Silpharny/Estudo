let input = document.querySelector("#fatorial")
let botao = document.querySelector("#botao")
let resposta = document.querySelector("#resposta")

const Fatorial = () => {

    if( input.value === 1 || input.value === 0) {
        return 1
    }
    
    
    for(i = input.value - 1; i > 1; i--) {
        
        let fat = input.value *= i
        
        let li = document.createElement('li')

        li.textContent = fat

        resposta.appendChild(li)
        

        console.log(li);
    }
}

botao.addEventListener('click', Fatorial)