"use strict";
// Tratamento de erros
/*
    Alguns módulos do node podem não ser instalados corretamente, como é o exemplo do Fetch que pode acabar não instalando corretamente.

    Caso isso ocorra, terá uma tela de erro com vários códigos aparecendo na tela do usuário final. Para evitarmos isso, podemos utilizar o método 'TRY'.

    Com ele nós tentamos mostrar o que desejamos e caso ocorra um erro, podemos deixar uma mensagem. Muito melhor do que a tela cheia de código solto para o usuário final

*/
try {
    fetch('https://viacep.com.br/ws/13211000/json/')
        .then(response => response.json());
}
catch (erro) {
    console.log('Ops, deu ruim :(');
}
