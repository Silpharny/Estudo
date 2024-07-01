let caderneta  = {
    nome,
    valor
}


let listaDivida = document.querySelector("#listaDivida")
let listaPagamento = document.querySelector("#listaPagamento")
let listaPessoas = document.querySelector("#listaPessoas")

function AdicionarDivida(nome,valor) {


    
    if (caderneta[nome]) {
        caderneta[nome] += caderneta[valor]
    } else {
        caderneta[nome] = valor
    }

    listaDivida.textContent = `Divida de ${valor} reais adicionada para ${nome}.`
}

function RegistrarPagamento(nome,valor) {


    
    if(caderneta[nome]) { 
        caderneta[nome] -= valor
        listaPagamento.textContent = `Pagamento de ${valor} reais registrado para ${nome}.`
    } else {
        listaPagamento.textContent =`Não foi encontrada nenhuma dívida para ${nome}.`
    }
}

function addPesoa(nome) {
    
    
    caderneta[nome] += caderneta[nome]
    
    listaPessoas.textContent = caderneta[nome].value
}

let pessoas = document.querySelector("#listaPessoas")

addPesoa('Maria')

console.log(caderneta)
