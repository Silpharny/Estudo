interface CourseProps {
  id: string
  name: string
  price: number

  promo: (price: number) => void
}

function showPromotion(price: number) {
  return `Promotion price: ${price}`
}

const course: CourseProps = {
  id: "1",
  name: "Typescript",
  price: 100,
  promo: showPromotion,
}

console.log(course.promo(350))

console.log(course.promo(course.price))
