"use strict";
// Como deixar um valor por default ou deixar ele opcional
// Age é opcional e por isso vem com o ponto de interrogação ao lado
function register(name, email, password, age) {
    let data = { name, email, password, age };
    console.log(data);
}
register("Sil", "2qLpH@example.com", "123456");
