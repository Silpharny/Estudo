//12 – Faça uma função que receba um vetor contendo N valores e retorne por referência o maior elemento do vetor e o número de vezes que esse elemento apareceu no vetor.

function Referencia(lista) {
    
    let maiorNum = lista[0]
    let contador = 0

    for (let i = 0; i < lista.length; i++) {
        
        if(lista[i] > maiorNum) {
            maiorNum = lista[i]
        } else if(lista[i] == maiorNum) {
            contador++
        }
    }
    
    console.log(maiorNum)
    console.log(contador)
}


let lista = [0, 2, 3, 5, 12, 11, 44, 31, 22, 2, 44]


console.log(Referencia(lista))