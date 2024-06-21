// O restOperator é parecido com o SpreadOperator, porém usamos o restOperator para funções


// JEITO ERRADO 1: GERALMENTE FAZEMOS ASSIM
function convidados(nomes){
    
    console.log(nomes); // vai imprimir somente o primeiro nome, único argumento passado 
}
convidados('Sil', 'Maria', 'José')

/* ============================================================================================== */


// JEITO ERRADO 2: UMA FORMA QUE PODE SER FEITA MAS VAMOS IMAGINAR QUE TENHAMOS 50 CONVIDADOS, IMAGINA FAZER DESSE JEITO
function convidados2(primeiroConvidado, segundoConvidado, terceiroConvidado){

    console.log(primeiroConvidado);
    console.log(segundoConvidado);
    console.log(terceiroConvidado);
}
convidados2('Sil', 'Maria', 'José')


// JEITO CERTO DE SE FAZER! USANDO RESTOPERATOR
function newConvidados(...nomes){
    
    console.log(nomes); // vai imprimir todos os nomes que foram chamados
}
newConvidados('Sil', 'Maria', 'José')


// Criando um sorteador
function Sorteador(...numeros){
    console.log(numeros);
    
    const numeroGerado = Math.floor(Math.random() * numeros.length)
    console.log(`Número gerado foi: ${numeros[numeroGerado]}`);
}

Sorteador(1,3,5,31,22,2,88,9)