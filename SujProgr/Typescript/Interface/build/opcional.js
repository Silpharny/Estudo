"use strict";
const newUser = {
    name: "John Doe",
    email: "johndoe@example.com",
    password: "123456",
};
console.log(newUser);
function registerNewUser(user) {
    console.log(user);
}
registerNewUser({
    name: "John Doe",
    email: "johndoe@example.com",
    password: "123456",
});
