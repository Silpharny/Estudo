//4 - Crie e compile um script que receba a data de aniversário de uma pessoa e informe se ela já fez aniversario nesse ano.

// data - data atual


const VerificarAniversario = (mesAniversario: number) => {
    
    let mesAtual: number = new Date().getMonth() + 1

    if (mesAniversario < mesAtual) {
        console.log('Ainda não fez aniversário');
    } else if (mesAniversario == mesAtual) {
        console.log('Faz esse mês');
    } else {
        console.log('Já fez aniverário');        
    }
    console.log(mesAtual);
}



console.log(VerificarAniversario(3));
