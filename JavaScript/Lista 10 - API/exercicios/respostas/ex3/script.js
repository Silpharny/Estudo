const cep = document.querySelector("#cep")
const uf = document.querySelector("#uf")
const bairro = document.querySelector("#bairro")
const localidade = document.querySelector("#localidade")


const autoComplete = () => {
    let endpoint = `https://viacep.com.br/ws/${cep.value}/json/`
    fetch(endpoint)
    .then(response => response.json())
    .then(result => {
        uf.value = result.uf
        localidade.value = result.localidade
        bairro.value = result.bairro
    })
    .catch(erro => {console.log(erro)})
}


cep.addEventListener('input', autoComplete)