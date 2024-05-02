
const arr = [1, 4, 7, 1, 2, 1, 4, 25, 3, 7]

const newArr = arr.reduce((previousValue, currentValue) => previousValue += currentValue, 0)

console.log(newArr);