//12 – Faça um algoritmo que recebendo um número entre 1 a 7 mostre no console o respectivo dia da semana. Exemplo: 1 – Domingo, 2 – Segunda...

let dia

dia = 7

switch (dia) {
    case 1:
        console.log('Domingo')
        break;

    case 2:
        console.log('Segunda')
        break;
        
    case 3:
        console.log('Terça')
        break;

    case 4:
        console.log('Quarta')
        break;

    case 5:
        console.log('Quinta')
        break;

    case 6:
        console.log('Sexta')
        break;
        
    case 7:
        console.log('Sábado')
        break;

    default:
        console.log('Dia não encontrado!')
        break;
}