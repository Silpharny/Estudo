let num1 = window.prompt('Digite o primeiro numero:')
let num2 = window.prompt('Digite o segundo numero:')
let num3 = window.prompt('Digite o terceiro numero:')
let mensagem

if(num1 > num2 && num1 > num3) {
    mensagem = `O primeiro número é o maior número, que é o ${num1}`
}
if(num2 > num1 && num2 > num3) {
    mensagem = `O segundo número é o maior número, que é o ${num2}`
}
if(num3 > num1 && num3 > num2) {
    mensagem = `O terceiro número é o maior número, que é o ${num3}`
}

window.alert(mensagem)

console.log(num1);
console.log(num2);
console.log(num3);