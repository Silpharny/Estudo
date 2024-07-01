// 8 - O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 30% e os impostos de 45%, escrever um algoritmo em Javascript que dado (atribuição) o custo de fábrica de um carro e escreva, no console o custo ao consumidor.
let custoFabrica = 10000

let percentagemDistribuidor = custoFabrica * 0.3
let percentagemImpostos = custoFabrica * 0.45

let custoConsumidor = custoFabrica + percentagemDistribuidor + percentagemImpostos

console.log(custoConsumidor)