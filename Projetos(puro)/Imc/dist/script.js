const weightInput = document.querySelector("#weight")
const heightInput = document.querySelector("#height")
const button = document.querySelector("#calculate")
const answerNew = document.querySelector(".informations-response")


let calculateImc = () => {
    let calculate = weightInput.value / (heightInput.value * heightInput.value)
    calculate = calculate * 10000
    
    showImc(calculate.toFixed(1))
    definedImc(calculate.toFixed(1))
} 

let showImc = (calculate) => {
        
    let imcResult = ''
    
    if (calculate < 17) {
        imcResult = 'Muito abaixo do peso'
    } else

    if(calculate < 18.49) {
        imcResult = 'Abaixo do peso'
    } else

    if(calculate < 24.99) {
        imcResult = 'Peso normal'
    } else

    if(calculate < 29.99) {
        imcResult = 'Acima do peso'
    } else 
    
    if(calculate < 34.99) {
        imcResult = 'Obesidade I'
    } else

    if(calculate < 39.99) {
        imcResult = 'Obesidade II (Severa)'
    } else

    if(calculate > 40) {
        imcResult = 'Obesidade III (Mórbida)'
    }
            
    let newTable = ""
    
    newTable += `
    
    <table class="table-auto w-full h-24 text-center">
        <thead>
            <tr class="border-b">
                <th>Peso</th>
                <th>Altura</th>
                <th>IMC</th>
                <th>Resultado</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="p-4 text-sm">${weightInput.value}kg</td>
                <td class="p-4 text-sm">${heightInput.value / 100}m</td>
                <td class="p-4 text-sm">${calculate}</td>
                <td class="p-4 text-sm">${imcResult}</td>
            </tr>
      
    </table>
    
    <table class="w-full text-center">
        <thead class="bg-gray-100 text-red-500">
            <th class="p-4">IMC</th>
            <th class="p-4">Classificação</th>
        </thead>
        <tbody>
            <tr class="">
                <td class="p-4 text-sm">Menos de 17</td>
                <td class="p-4 text-sm">Muito abaixo do peso</td>
            </tr>
            <tr class="bg-gray-100">
                <td class="p-4 text-sm">Entre 17 e 18.49</td>
                <td class="p-4 text-sm">Abaixo do peso</td>
            </tr>
            <tr class="">
                <td class="p-4 text-sm">Entre 18.5 e 24.99</td>
                <td class="p-4 text-sm">Peso Normal</td>
            </tr>
            <tr class="bg-gray-100">
                <td class="p-4 text-sm">Entre 25 e 29.99</td>
                <td class="p-4 text-sm">Acima do peso</td>
            </tr>
            <tr class="">
                <td class="p-4 text-sm">Entre 30 e 34.99</td>
                <td class="p-4 text-sm">Obesidade I</td>
            </tr>
            <tr class="bg-gray-100">
                <td class="p-4 text-sm">Entre 35 e 39.99</td>
                <td class="p-4 text-sm">Obesidade II (Severa)</td>
            </tr>
            <tr class="">
                <td class="p-4 text-sm">Entre 40</td>
                <td class="p-4 text-sm">Obesidade III (Mórbida)</td>
            </tr>
        </tbody>
    </table>
`   
    answerNew.innerHTML = newTable
}



button.addEventListener('click', calculateImc)