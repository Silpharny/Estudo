const cep = document.querySelector("#cep")
const button = document.querySelector("#btn")
const cityList = document.querySelector("#list")

let list = []


const GetCity = () => {
    const endpoint = `https://viacep.com.br/ws/${cep.value}/json/`
    
    fetch(endpoint)
    .then(response => response.json())
    .then(result => {
       list.push(result.localidade)
    })
    .catch(erro => { console.log(erro); })    
}

const printList = () => {
    GetCity()
    
    cityList.innerHTML = list.map(item => `<li>${item}</li>`).join('')
 }
    
 button.addEventListener('click', printList)