let cards = document.getElementById("cards")

const gerarPokemons = () => {
    
    for (index = 0; index <= 3; index++) {
        
        let endpoint = `https://pokeapi.co/api/v2/pokemon/${index}`
        fetch(endpoint)
        .then(response => response.json())
        .then(result => {
            
            cards.innerHTML += 
            
            `
            <div class = 'card'>
                <p>${result.name}</p>
                <div class = 'linha'></div>
                <div class = 'card-dados'>
                    <p>${result.weight} kg peso</p>
                    <p>${result.height} m altura</p>
                </div>  
                <p> ${result.types[0].type.name} Tipos </p>
                <img src="assets/pngegg.png" alt="logo" id="logo">
            </div>
            `
    
        })
    }
}

gerarPokemons()