// Includes, Startswidth, endswidth

let nomes = ['Sil', 'José', 'Lucas']

/*
    Includes - Serve para fazer uma verificação se existe ou não um elemento específico dentro de um array. Se o elemento existir vai retornar 'true', caso não exista vai retornar um 'false'.
*/

nomes.includes('Lucas') // Vai retornar true, porque o 'Lucas' está dentro do array

// Podemos também fazer condicionais. Se o elemento existe, podemos retornar algo específico
if(nomes.includes('Sil')){
    console.log('Está na lista');
} else {
    console.log('Não está na lista');
}

/* ========================STARTSWIDTH======================== */

// Aqui estamos fazendo uma verificação se o item pesquisado começa com determinados caracteres
let nome = 'Silpharny'

nome.startsWith('Sil') // Vai retornar true, já que o nome em questão começa com essas 3 letras


/* ========================ENDSWIDTH======================== */

// Aqui estamos fazendo a verificação se o item termina com determinado caracter

nome.endsWith('y') // Vai retornar true, já que o nome termina com y