"use strict";
function showPromotion(price) {
    return `Promotion price: ${price}`;
}
const course = {
    id: "1",
    name: "Typescript",
    price: 100,
    promo: showPromotion,
};
console.log(course.promo(350));
console.log(course.promo(course.price));
