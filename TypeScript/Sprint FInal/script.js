"use strict";
class Package {
    constructor(_packageName, _packageDescription, _packageDate) {
        this.packageName = _packageName;
        this.packageDescription = _packageDescription;
        this.packageDate = _packageDate;
    }
}
let packageList = [];
let cadastrar = document.getElementById("btn-cadastrar");
let sec = document.querySelector(".section-02");
const create = () => {
    let name = document.querySelector("#name");
    name = name.value;
    let description = document.querySelector("#descricao");
    description = description.value;
    let date = document.querySelector("#date");
    date = date.value;
    let newPackage = new Package(name, description, date);
    packageList.push(newPackage);
    console.log(packageList);
    let div = document.createElement('div');
    div.textContent += `${name} - ${description} - ${date}`;
    sec === null || sec === void 0 ? void 0 : sec.appendChild(div);
};
cadastrar === null || cadastrar === void 0 ? void 0 : cadastrar.addEventListener('click', create);
const read = () => {
};
const update = () => {
};
const deleteOf = () => {
};
