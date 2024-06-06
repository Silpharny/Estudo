const sectionForm = document.querySelector("#section-form")
const sectionInformation = document.querySelector("#section-information")

const name = document.querySelector("#first_name")
const age = document.querySelector("#age")
const monthlyIncome = document.querySelector("#monthly_income")
const investmentTime = document.querySelector("#investment_time")
const investmentProfile = document.querySelector("#investment_profile")
const button = document.querySelector("#to_check")


let getValueProfile = () => {
    let investmentProfileValue = ''
    
    for (let i = 0; i < investmentProfile.length; i++) {   
        if(investmentProfile[i].selected) {
            return investmentProfileValue = investmentProfile[i].value
        }
    }
}

let putInformations = () => {
    let newLi = `
    <h2 class="text-3xl pb-10 font-bold text-slate-300 text-center">Seu Resultado</h2>
    <p><span class="font-bold">Nome: </span>${name.value}<p/>
    <p><span class="font-bold">Idade: </span>${age.value}<p/>
    <p><span class="font-bold">Renda Mensal: </span>${monthlyIncome.value}<p/>
    <p><span class="font-bold">Perfil de Investidor: </span>${getValueProfile()}<p/>
    <p><span class="font-bold">Renda Composta: </span>R$${calculateProfit()}<p/>
    `
    sectionInformation.innerHTML = newLi
    closeForm()
    addClassSectionInformation()
}

let calculateProfit = () => {
    let profit = (monthlyIncome.value * ((1 + 0.01) ** investmentTime.value)) - monthlyIncome.value
    let finalResult = monthlyIncome.value * investmentTime.value + profit
    return finalResult.toFixed(2)
}

let addClassSectionInformation = () => {
    sectionInformation.className = 'bg-slate-800 p-10 rounded-md shadow text-slate-300 flex flex-col gap-4'
}

let closeForm = () => {
    sectionForm.style.display = "none"
}

button.addEventListener('click', (e) => {
    putInformations()
    getValueProfile()

    e.preventDefault()
})