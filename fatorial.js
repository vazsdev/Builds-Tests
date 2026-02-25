// Proposta: calcular o fatorial de um número, mas somente se o número for maior que 0, caso contrário, exibe uma mensagem de erro

const n = 5
const error = "Erro, o número deve ser maior que 0"

function factorial(n) {
    if (n > 0) {
        let result = 1
        for (let i = 1; i <= n; i++) {
            result *= i
        }     
        console.log(result)   
        return result
    } else {
        console.log(error)
        return error    
    }
}

factorial(5)
factorial(0)
factorial(-3)
factorial(10)
factorial(n)
