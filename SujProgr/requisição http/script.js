// Consumir api é consumir dados externos em uma 

// URL: https://sujeitoprogramador.com/rn-api/?api=posts


let listElement = document.querySelector('#app')

let posts = []

function nutriApp() {
    
    fetch('https://sujeitoprogramador.com/rn-api/?api=posts')
        
        // O primeiro then vai transformar a resposta em JSON
        .then((res) => res.json())
        
        // O segundo then, já com a resposta em JSON, vai retornar os dados que eu quero
        .then((res)=> {
            
            console.log(res); // Retornar os dados em um Array
            
            posts = res // Colocando a lista dentro da variável posts

            posts.map((item) => {
                
                let liElement = document.createElement('li')
                let titleElement = document.createElement('strong')
                let imgElement = document.createElement('img')
                let descriptionElement = document.createElement('a')

                let titleText = document.createTextNode(item.titulo)
                titleElement.appendChild(titleText)
                liElement.appendChild(titleElement)

                imgElement.src = item.capa
                liElement.appendChild(imgElement)

                let descriptionText = document.createTextNode(item.subtitulo)
                descriptionElement.appendChild(descriptionText)
                liElement.appendChild(descriptionElement)

                listElement.appendChild(liElement)
            })
        })

        // Catch - Para tratar os possíveis erros que possam dar
        .catch(() => console.log('Deu erro!'))

}

nutriApp()