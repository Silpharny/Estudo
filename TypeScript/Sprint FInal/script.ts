class Package {
    packageName:string
    packageDescription:string
    packageDate: Date

    constructor(_packageName:string, _packageDescription:string, _packageDate:Date) {
        this.packageName = _packageName
        this.packageDescription = _packageDescription
        this.packageDate = _packageDate
    }

}
let packageList: Package[] = []

let cadastrar = document.getElementById("btn-cadastrar")

let sec = document.querySelector(".section-02")



const create = () => {
    let name: any = document.querySelector("#name")
    name = name.value
    
    let description: any = document.querySelector("#descricao")
    description = description.value

    let date: any = document.querySelector("#date")
    date = date.value
    
    let newPackage = new Package(name, description, date)

    packageList.push(newPackage)

    console.log(packageList);

    let div = document.createElement('div')
    div.textContent += `${name} - ${description} - ${date}`
    sec?.appendChild(div)

}

cadastrar?.addEventListener('click', create)

const read = () => {

}

const update = () => {

}

const deleteOf = () => {

}