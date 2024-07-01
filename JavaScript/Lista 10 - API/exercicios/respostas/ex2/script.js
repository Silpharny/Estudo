const street = document.querySelector("#street")
const btn = document.querySelector("#btn")
const cep = document.querySelector("#cepList")

let list = []

const searchStreet = () => {
    let endpoint = `https://viacep.com.br/ws    /${street.value}/json/`
    fetch(endpoint)
    .then(repsonse => repsonse.json())
    .then(result => {
        list.push(result.cep)
        console.log(list);
    })
}

const printStreet = () => {
    searchStreet()
    cep.innerHTML = list.map(item => `<p>${item}</p>`).join('')
}

btn.addEventListener('click', printStreet)