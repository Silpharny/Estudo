//4 - Escreva um algoritmo que permita a leitura dos nomes de 5 pessoas e armazene os nomes lidos em um vetor. Após isto, o algoritmo deve permitir a leitura de um nome qualquer de pessoa e depois escrever a mensagem ACHEI, se o nome estiver entre os 5 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário. Gere os resultados no console.


let listaNomes = ['Maria', 'João', 'Carlos', 'Vitoria', 'Iago', 'Mário']

let nome = "Mário"

for (let i = 0; i < listaNomes.length; i++) {
    
    if(listaNomes[i] == nome) {
        console.log("Achei")
    } else {
        console.log("Não achei")
        
    }
    
}

