let habitantes = [
    {
        nome: "Maria",
        salario: 1000,
        filhos: 2
    },
    {
        nome: "Marcos",
        salario: 1000,
        filhos: 1
    },
    {
        nome: "Lucas",
        salario: 3000,
        filhos: 1
    },
    {
        nome: "Laura",
        salario: 12000,
        filhos: 0
    },

    {
        nome: "Henrique",
        salario: 5000,
        filhos: 3
    },

    {
        nome: "Carlos",
        salario: 500,
        filhos: 4
    }
]

let listaSalario = []

function MediaSalario() {
    
    let somaSalario = 0
    
    for(i = 0; i < habitantes.length; i++){
        
        let salario = habitantes[i].salario
        listaSalario.push(salario)

        somaSalario += listaSalario[i]
    }

    let mediaSalario = somaSalario / habitantes.length
    
    return mediaSalario
}

function MediaFilhos() {

    let listaFilhos = []
    let somaFilhos = 0

    for(i = 0; i < habitantes.length; i++) {

        let filhos = habitantes[i].filhos
        listaFilhos.push(filhos)

        somaFilhos += listaFilhos[i]
    }
    let mediaFilhos = somaFilhos / habitantes.length

    return mediaFilhos.toFixed(2)
}

function MaiorSalario() {

    return Math.max(...listaSalario)
}



function PercentualSalarios() {
    
    let listaDeMil = []
    let somaMil = 0

    for(i = 0; i < habitantes.length; i++) {    

        let salario = habitantes[i].salario
        listaDeMil.push(salario)       
    }

    for(i = 0; i < listaDeMil.length; i++) {

        if(listaDeMil[i] <= 1000) {            
            somaMil += listaDeMil[i]
        }
    }

    let percentual = somaMil / 100
    return percentual
}

console.log(`a) Média de salário da população: R$${MediaSalario()} Reais`);
console.log(`b) Média de número de filhos: ${MediaFilhos()} por cidadão`);
console.log(`c) Maior salário da cidade é de: R$${MaiorSalario()} Reais`);
console.log(`d) O percentual das pessoas com menos de R$1000 na cidade é de: ${PercentualSalarios()}%`);