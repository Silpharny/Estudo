const  pokemonName = document.querySelector("#name")
const pokemon = document.querySelector("#info") 
const btn = document.querySelector("#btn")

const searchPokemon = () => {
    let endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`
    fetch(endpoint)
    .then(response => response.json())
    .then(result => {

        pokemon.innerHTML = 
        `
        <p>Name: ${result.name}</p>
        <p>Nº: ${result.id}</p>
        <p>Type: ${result.types[0].type.name}</p>
        <p>Weight: ${result.weight}</p>
        <p>Height: ${result.height}</p>
        `
        console.log(result);
    })
}

btn.addEventListener('click', searchPokemon)