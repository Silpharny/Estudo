let listaCompras = ["1 - Suco", " 2 - Água", "3 - Sorvete", "Chamar o garçom"];
console.log(listaCompras);

// Switch

let valor = 2;

switch (valor) {
  case 1:
    console.log("Você escolheu número 1 que é o Suco");
    break;
  case 2:
    console.log("Você escolheu número 2 que é a Água");
    break;
  case 3:
    console.log("Você escolheu número 3 que é o Sorvete");
    break;
  case 4:
    console.log("Chamar o garçom!");
    break;
  default:
    console.log("Escolha um número de 1 à 4");
    break;
}
