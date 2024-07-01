"use strict";
const nameInput = document.querySelector("#name");
const statusInput = document.querySelector(".status");
const dateInput = document.querySelector("#date");
const button = document.querySelector("#btn-cadastrar");
class Package {
    constructor(_packageName, _packageDescription, _packageDate) {
        this.packageName = _packageName;
        this.packageDescription = _packageDescription;
        this.packageDate = _packageDate;
    }
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    console.log(statusInput);
});
