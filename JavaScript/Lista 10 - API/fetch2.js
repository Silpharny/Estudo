// Fetch - API

// Promise -> Um pedido que ainda não foi atendido e pode ser resolvido ou rejeitado
    // then - Pegar a resposta
    // catch - Tratativa de erro
// Exemplo -> Um motorista de Uber recebendo uma viagem, ele pode aceitar ou rejeitar



// Via CEP - https://viacep.com.br/
let endpoint = "https://viacep.com.br/ws/05407002/json/"

fetch(endpoint, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    
.then(response => response.json())
.then(result => {
    console.log(result);
})
.catch(erro => {
    console.log(erro);
})  