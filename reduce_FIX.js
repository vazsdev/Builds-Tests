// Carrinho de compras simples. Usando o reduce.

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
  { name: "Mouse", price: 50, quantity: 4 },
  { name: "Monitor", price: 800, quantity: 2 }
]

const productLabels = CartService.getProductLabels(cart)
console.log("Product labels:", productLabels.join(" | "))

const summary = CartService.getSummary(cart)
console.log(
  `Total: ${Currency.formatBRL(summary.total)} | Quantity: ${summary.totalQuantity}`
)
