// Proposta: Somar todos os números

const numeros = [10, 20, 30, 40]

function somarNumeros(numeros) {
    return numeros.reduce((total, numero) => total + numero, 0)
}

console.log(`A soma dos números é: ${somarNumeros(numeros)}`)



// Proposta: Maior número em um array

const numeros2 = [5, 12, 8, 130, 44]

function encontrarMaiorNumero(numeros) {
    if (numeros.length === 0) return undefined

    return numeros.reduce((maior, numero) => (numero > maior ? numero : maior), numeros[0])
}

console.log(`O maior número é: ${encontrarMaiorNumero(numeros2)}`)



// Proposta: Contar a frequência de elementos em um array

const frutas = ["banana", "maçã", "banana", "laranja", "maçã", "banana"]

function contarFrequencia(frutas) {
    return frutas.reduce((frequencia, fruta) => {
        frequencia[fruta] = (frequencia[fruta] || 0) + 1
        return frequencia
    }, {})
}

console.log("Frequência das frutas:", 
    Object.entries(contarFrequencia(frutas)).map(([fruta, frequencia]) => `${fruta}: ${frequencia}`).join(", "))



// Proposta: Somar total do carrinho

const carrinho = [
  { nome: "Teclado", preco: 100, quantidade: 2 },
  { nome: "Mouse", preco: 50, quantidade: 1 },
  { nome: "Monitor", preco: 800, quantidade: 1 }
]

function calcularTotal(carrinho) {
    return carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0)
}

const totalCarrinho = calcularTotal(carrinho)
console.log(`Total do carrinho: ${totalCarrinho.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL" 
})}`)

//Proposta: Pegar só os nomes dos produtos do carrinho

function pegarNomesProdutos(carrinho) {
    return carrinho.reduce((acc, item) => {
        if (item.nome.toLowerCase() === "teclado") {return acc}
        acc.push(item.nome + " ---> " + item.preco.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL" 
        }))
        return acc 
    }, [])
}

const nomesProdutos = pegarNomesProdutos(carrinho)
console.log(`Nomes dos Produtos:`, nomesProdutos.join(" | "))

function resumoCarrinho(carrinho) {
  return carrinho.reduce((acc, item) => {
    if (item.nome.toLowerCase() === "teclado") return acc
    acc.total += item.preco * item.quantidade
    acc.quantidadeTotal += item.quantidade
    return acc
  }, {
    total: 0,
    quantidadeTotal: 0
  })
}

const resultado = resumoCarrinho(carrinho)

console.log(
  "Total: " + resultado.total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) +
  " | Quantidade: " +
  resultado.quantidadeTotal
)

// EXEMPLO DE REFATORAÇÃO SEGUNDO UM ALEATÓRIO DO DISCORD

const Currency = {
  formatBRL(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  }
}

const CartRules = {
  EXCLUDED_PRODUCT_NAMES: ["teclado"].map(n => n.toLowerCase())
}

const CartService = {
  calculateTotal(cart) {
    return cart.reduce(
      (total, item) =>
        total + (item.price ?? 0) * (item.quantity ?? 0),
      0
    )
  },

  getVisibleProducts(cart) {
    return cart.filter(
      item => !CartRules.EXCLUDED_PRODUCT_NAMES.includes(item.name.toLowerCase())
    )
  },


  getProductLabels(cart) {
    return this.getVisibleProducts(cart).map(
      item => `${item.name} ---> ${Currency.formatBRL(item.price)}`
    )
  },

  getSummary(cart) {
    return CartService.getVisibleProducts(cart).reduce(
      (summary, item) => {
        summary.total += item.price * item.quantity
        summary.totalQuantity += item.quantity
        return summary
      },
      { total: 0, totalQuantity: 0 }
    )
  }
}

const cart = [
  { name: "Teclado", price: 100, quantity: 2 },
  { name: "Mouse", price: 50, quantity: 1 },
  { name: "Monitor", price: 800, quantity: 2 }
]

const total = CartService.calculateTotal(cart)
console.log("Cart total:", Currency.formatBRL(total))

const productLabels = CartService.getProductLabels(cart)
console.log("Product labels:", productLabels.join(" | "))

const summary = CartService.getSummary(cart)
console.log(
  `Total: ${Currency.formatBRL(summary.total)} | Quantity: ${summary.totalQuantity}`
)
