let splitStr, reverseStr, joinStr

const palindrome = (str) => {

        splitStr = str.split('')
        reverseStr = splitStr.reverse()
        joinStr = reverseStr.join('')

        if (joinStr.toLowerCase() == str.toLowerCase()) {
            return console.log('É um palíndromo');
        } else {

            return console.log('Não é um palíndromo');
        }
}


console.log(palindrome('Ana'));