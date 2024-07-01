let produto = document.querySelector("#produto")
let resultado = document.querySelector("#resultado")


let endpoint =" http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick"

fetch(endpoint)
.then(response => response.json())
.then(result => {
    resultado.innerHTML = 
    `
    <p>${result[0].id}</p>
    <p>${result[0].product_type}</p>
    <p>${result[0].price}</p>
    <p>${result[0].description}</p>
    `
})