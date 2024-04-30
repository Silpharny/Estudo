
let num1, num2, num3


const randomList = () => {
    for(i = 0; i < 3; i++) {        
        num1 = Math.floor(Math.random() * 10)
        num2 = Math.floor(Math.random() * 10)
        num3 = Math.floor(Math.random() * 10)
    }
}
randomList()



const allNumber = (num1, num2, num3) => {
    
    console.log(`O primeiro número é: ${num1}`)
    console.log(`O segundo número é: ${num2}`)
    console.log(`O terceiro número é: ${num3}`)
    console.log("===================");
    console.log(" ");

    const higherNum = () => {

        
        if(num1 > num2 && num1 > num3) {
            console.log(`O maior número é o primeiro: ${num1}`)
        } 
        
        if(num2 > num1 && num2 > num3){
            console.log(`O maior número é o segundo: ${num2}`)
        }

        if(num3 > num1 && num3 > num2) {
            console.log(`O maior número é o terceiro: ${num3}`)
        }

        if(num1 == num2 && num2 == num3) {
            console.log("Todos os números são iguais");
        }
    }

    higherNum()
    
}

allNumber(num1, num2, num3)