// Const e Let

let idade = 25
idade = 26
console.log(idade); // A resposta aqui vai ser 26, porque mudei o valor da variavel

const cpf = "999.999.999-99"
console.log(idade); // Const é indicado para valores que não mudam como: CPF, Token de acesso, url da página principal etc 

// Escopo

    // Global
    const globalConst = 10
    let globalLet = 30
    globalLet = 20

    console.log(globalConst);
    console.log(globalLet);


    // Local - Dentro de uma função
    function Mostrar() {
        let localLet = "Let Local"
        
        console.log(localLet); // Só é possível acessar a variavel 'localLet' dentro da função 'Mostrar()'. Isso porque ela foi criada localmente, ou seja, dentro da função
    }

    // Bloco
    if(true) {
        let blocoLet = "Bloco Let"
        console.log(blocoLet); // Nesse caso, a variavel 'blocoLet' só vai ser imprimida aqui dentro desse bloco (if). Caso eu tente usar ela fora desse bloco, o valor dela será dado como 'indefinido'
    }
