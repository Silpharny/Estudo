const nameInput: any = document.querySelector("#name")
const statusInput: any = document.querySelector(".status")
const dateInput: any = document.querySelector("#date")
const button = document.querySelector("#btn-cadastrar")

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



button?.addEventListener("click", () => {console.log(statusInput);
})