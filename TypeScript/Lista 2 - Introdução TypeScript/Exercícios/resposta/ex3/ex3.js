"use strict";
//3 - Crie e compile um script para ler a idade de uma pessoa (int), e exiba true para caso ela tenha mais de 20 anos ou false case seja menor. Lembre-se de utilizar o tipo boolean;
const VerificacaoIdade = (idade) => {
    let maiorIdade = true;
    if (idade >= 20) {
        console.log(maiorIdade);
    }
    else {
        console.log(maiorIdade = false);
    }
};
VerificacaoIdade(22);
