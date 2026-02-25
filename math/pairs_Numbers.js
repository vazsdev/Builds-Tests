//Crie um novo array contendo **apenas os números pares**.
//Bônus: Retorne também quantos números pares foram encontrados.

const numbers = [3, 8, 15, 22, 7, 10, 2]

const pairs = {
  getTotalPairsNumbers(numbers) {
    return numbers.reduce((total, number) => 
        total + (number % 2 === 0)
    , 0)
  },

  getWhoPairsNumbers(numbers) {
    return numbers.reduce((total, number) => {
      if (number % 2 === 0) {
        total.push(number)
      }
      return total
    }, [])
  }
}

const whoPairsNumbers = pairs.getWhoPairsNumbers(numbers)
const totalPairsNumbers = pairs.getTotalPairsNumbers(numbers)

console.log(totalPairsNumbers) // quantidade de pares
console.log(whoPairsNumbers.join(', ')) // quais são os pares

//Outro método MUITO, MAS MUITO mais eficaz, usando .filter()

const pares = numbers.filter(n => n % 2 === 0)

console.log(pares.length)
console.log(pares.join(', '))
