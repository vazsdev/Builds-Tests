// Proposta: soma um número com outro, mas somente se o primeiro número for igual a 2, caso contrário, exibe uma mensagem de erro

const num1 = 2
const num2 = 4
const error = "Erro, o número não é igual a 2"

function make_add(num1, num2) {
    if (num1 === 2) {
        const numFinal = num1 + num2
        console.log(numFinal)
        return numFinal
    } else {
        console.log(error)
        return error
    }
}

make_add(2, 4)
make_add(2, 10)
make_add(1, 5)
make_add(2, 7)
make_add(num1, num2)
