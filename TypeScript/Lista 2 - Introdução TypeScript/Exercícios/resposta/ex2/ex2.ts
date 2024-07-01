// Fórmula de área do retângulo -   a(área) = b(base)*h(altura)

const CalcularArea = (b: number, h: number): string => {
    
    let areaTotal: number = b * h 
    
    let area: string = `A área do retângulo é igual a: ${areaTotal}`
    return area
}

console.log(CalcularArea(2,5));
