
const RandomNum = () => Math.floor(Math.random() * 100) 


const DigitQuantity = (num) => {

    console.log(`O número é: ${num}`);

    let numToString = num.toString()
    const result = numToString.length

    return result

}

console.log(`o comprimento dele é: ${DigitQuantity(RandomNum())}`);