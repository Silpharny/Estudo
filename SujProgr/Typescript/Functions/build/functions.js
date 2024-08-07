"use strict";
function login(username) {
    console.log(`Welcome ${username}`);
    return username;
}
login("Sil");
const n1 = 10;
const n2 = 20;
function sum(value1, value2) {
    const sum = value1 + value2;
    return sum;
}
// or
function sum2(value1, value2) {
    let sum = value1 + value2;
    if (sum > 20) {
        return "Greater than 20";
    }
    else {
        return "Less than or equal to 20";
    }
}
