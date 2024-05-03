let numero = document.querySelector('#numero')
let botao = document.querySelector('#botao')
let lista = document.querySelector('#lista')



const Tabuada = () => {
    for(i = 0; i <= 10; i++) {
        
        let li = document.createElement('li')
        li.textContent += `${numero.value} x ${i} = ${numero.value * i}`
        
        lista.appendChild(li)
    }

}

botao.addEventListener('click', Tabuada)