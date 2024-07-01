let frase, letra


function quantasVezesAparece(frase,letra) {
    
    let quantidade = 0

    for(i = 0; i <= frase.length; i++) {
        if(frase[i] == letra) {
            quantidade++
        }
    }
    console.log(`Na frase "${frase}" a letra ${letra} aparece ${quantidade} vezes`)
}

quantasVezesAparece("Frase de exemplo", "e")