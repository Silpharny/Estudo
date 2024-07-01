//14 – Faça uma função que calcule a fatorial de um número.

function Fatorial(num) {

    for (let i = num - 1; i >= 1; i--) {
        
        num = num * i
    }

    return num
    
}

console.log(Fatorial(5))