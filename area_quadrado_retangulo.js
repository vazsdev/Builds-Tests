// Proposta: cacular a área de um quadrado ou retângulo, mas somente se os lados forem maiores que 0, caso contrário, exibe uma mensagem de erro

const lado1 = 5
const lado2 = 10
const error = "Erro, os lados devem ser maiores que 0"

function area_quadrado_retangulo(lado1, lado2) {
    if (lado1 > 0 && lado2 > 0) {
        const area = lado1 * lado2
        console.log(area)
        return area
    } else {
        console.log(error)
        return error
    }
}

area_quadrado_retangulo(5, 10)
area_quadrado_retangulo(0, 10)
area_quadrado_retangulo(5, -3)
area_quadrado_retangulo(7, 7)
area_quadrado_retangulo(lado1, lado2)
