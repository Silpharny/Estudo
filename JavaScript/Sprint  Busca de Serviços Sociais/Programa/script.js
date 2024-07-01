const services = [  
    {    
        name: "Casa de Acolhimento São Francisco",
        region: "Centro",
        type: "Acolhimento",
        contact: "casadesaofrancisco@gmail.com"
    },  
    
    {    
        name: "ONG Vida Nova",
        region: "Zona Norte",
        type: "Assistência Social",    
        contact: "ongvidanova@gmail.com"  
    },  
        
    {    
        name: "Associação de Apoio ao Idoso",    
        region: "Zona Sul",    
        type: "Apoio ao Idoso",    
        contact: "aai@gmail.com"  
}];

function SearchServices(region, type) {  

    region = document.querySelector("#regionSearch").value
    type = document.querySelector("#typeSearch").value

    let respostaService = document.querySelector("#respostaService")

    const results = services.filter(service => {    
        return service.region === region && service.type === type;
        
    });  

    if (results.length === 0) {
        respostaService.textContent = `Não foram encontrados serviços sociais na região ${region} do tipo ${type}.`
    } else {
        respostaService.textContent = `Os seguintes serviços sociais foram encontrados na região ${region} do tipo ${type}:`
        results.forEach(result => {
            respostaService.textContent = `${result.name} - Contato: ${result.contact}`
    });  
    }
}

function AddServices() {

    let addName = document.querySelector("#name").value
    let addRegion = document.querySelector("#region").value
    let addType = document.querySelector("#type").value
    let addContact = document.querySelector("#contact").value

    let newService = {name: addName, region: addRegion, type: addType, contact: addContact}

    services.push(newService)

}
console.log(services);



