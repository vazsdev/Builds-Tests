// Proposta: Fómula de Bhaskara

const a = 5
const b = 3
const c = -2

function bhaskara(a, b, c) {
    const delta = b**2 - 4*a*c
    if (delta < 0) {
        return "Não é possível. Delta = " + delta
    } else if (delta === 0) {
        const raiz = -b / (2*a)
        return `Existe uma raiz real: ${raiz}`
    } else {
        const raiz1 = (-b + Math.sqrt(delta)) / (2*a)
        const raiz2 = (-b - Math.sqrt(delta)) / (2*a)
        return `Existem duas raízes reais: x' = ${raiz1} | x'' = ${raiz2}`
    }
}

console.log(bhaskara(a, b, c))
