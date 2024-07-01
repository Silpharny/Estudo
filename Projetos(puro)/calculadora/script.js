let display = document.querySelector(".display")

const AddCaracter = (caracter) => {
    display.value += caracter
}

const CleanScreen = () => {
    display.value = ''
}

const ReverseNumber = () => {
    display.value *= -1 
}

const Calculate = () => {
    
    if(display.value == '') {
        display.value = ''
    } else {
        display.value = eval(display.value)
    }
}