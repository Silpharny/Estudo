let num = Math.floor(Math.random() * 100)

console.log(`O número original é: ${num}`)

const reverseNum = num => {
    
    let reverseNum = parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num) 
    
    return console.log(`O número ao contrário é: ${reverseNum}`);
    }

console.log(reverseNum(num));