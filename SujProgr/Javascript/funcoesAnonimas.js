// Funções que não tem nome, mais simplificada em formato de arrow function


/* 
    () => {}
    
    1 - Os parênteses, que é por onde a função recebe argumentos (assim como em funções tradicionais)
    2 - "Seta" => Responsável pelo nome 'Arrow'
    3 - São as chaves: O bloco de código que representa o corpo da função
*/

// FUNÇÃO TRADICIONAL
function somar(num1,num2){
    let total = num1 + num2
    return console.log(total);
}
somar(8,2)

// ARROW FUNCTION
let subtrair = (num3, num4) => {
    let total = num3 - num4
    return console.log(total)
}
subtrair(4,2)

let numeros = [3,1,13,32,55,51,31]

//FUNÇÃO ANÔNIMA
numeros.map((item) => { console.log(item) })