let arr: Array<number> = [10, 12, 15, 20, 22]

const Soma = (num: Array<number>) => {
    for (let i: number = 0; i < arr.length - 1; i++){

        let num1: number = arr[i]
        let num2: number = arr[i + 1]
        const resultado:number = num1 + num2

        console.log(`A soma entre ${num1} + ${num2} é igual a: ${resultado}`);
    }
}

console.log(Soma(arr));