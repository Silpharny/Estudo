const iptCep = document.querySelector("#cep")
const iptLogradouro = document.querySelector("#logradouro")
const iptComplemento = document.querySelector("#complemento")
const iptBairro = document.querySelector("#bairro")
const iptLocalidade = document.querySelector("#localidade")
const iptUf = document.querySelector("#uf")
const btn = document.querySelector("#btn")
   

const ConsultarCep = (cep) => {
    
    let endpoint = `https://viacep.com.br/ws/${cep}/json/`
    fetch(endpoint, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })    
    
    .then(response => response.json())
    .then(result => {

        iptLogradouro.value = result.logradouro
        iptComplemento.value = result.complemento
        iptBairro.value = result.bairro
        iptLocalidade.value = result.localidade
        iptUf.value = result.uf

    })
    
    .catch(erro => {
        console.log(erro);
    })  
}

iptCep.addEventListener('input', () => {
    if(iptCep.value.length > 7) {
        ConsultarCep(iptCep.value)
    }
})