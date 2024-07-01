let products = ["Computador", "Telefone", "Mouse", "Teclado"]

console.log(products);
console.log(products.length);
console.log("====================");

console.log(products.splice(2,1));
console.log(products);
console.log("====================");

let busca = products.find((item) => item === 'Computador')

if (busca) {
    console.log(`Este produto existe: ${busca}`);
} else {
    console.log(`Este produto não existe: ${busca}`);
}
console.log("====================");

console.log(products);
console.log(products.splice(1,1));
console.log("====================");


let numberList = [1,3,5,7,0,9]
console.log(numberList.sort())
console.log(numberList.shift());
console.log(numberList.sort((a,b) => b -a))
console.log("====================");


const date = new Date
const day = date.getDate()
const month = date.getMonth()
const year = date.getFullYear()

const today = `${day}/${month}/${year}`

console.log(today);