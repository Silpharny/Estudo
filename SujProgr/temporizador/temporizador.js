//setInterval -> Ele é responsável por executar em um intervalo de tempo pré definido

function acao(){
    document.write('Executando... <br/>')
}

// A função acao vai ser executada a cada 1s para sempre
setInterval(acao, 1000) // Valor em milisegundos

// É possível usar o setInterval com uma função anônima


setInterval(() => {
    document.write('Executando 2... <br/>')
}, 1000)



// setTimeout -> Ele vai ser executado apenas uma vez, ou seja, vou executar uma função depois de determinado tempo
setTimeout(acao, 3000);

// É possível usar o setTimeout com uma função anônima
setTimeout(() => {
    document.write('Executou o Timeout!!!');
}, 1000);