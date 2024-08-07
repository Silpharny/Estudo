/* function totalSelling(sell1: number, sell2: number, sell3: number): number {
  const total = sell1 + sell2 + sell3
  return total
} */

function totalSelling(...sell: number[]): number {
  let totalSelling = sell.length
  return totalSelling
}
totalSelling(10, 20, 30, 50, 300, 32, 10)
