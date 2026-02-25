// Testes com carrinho de compras

const products = [
    {name: "Teclado", price: 200, quantity: 2},
    {name: "Mouse", price: 250, quantity: 1},
    {name: "Monitor", price: 1100, quantity: 2},
    {name: "Mousepad", price: 50, quantity: 1},
    {name: "Headset", price: 180, quantity: 1}
]

const currency = {
  getCurrency(total) {
    return total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL"
    })
  }
}

const cartService = {

    getProductsTotal(products = []) {
        return products.reduce((total, item) => {
            return total + (item.price ?? 0) * (item.quantity ?? 0) 
        }, 0) 
    },

    getProductsNames(products) {
        return products.map(item => item.name).join(', ')
    },

    getProductsQuantity(products) {
        return products.reduce((quantity, item) => {
            return quantity + (item.quantity ?? 0) 
        }, 0) 
    },

    getCartSummary(products) {
    const total = this.getProductsTotal(products)

    return {
        total: currency.getCurrency(total),
        names: this.getProductsNames(products),
        quantity: this.getProductsQuantity(products)
    }
    }

}

const summary = cartService.getCartSummary(products)
console.log(
    `Total: ${summary.total} | Produtos: ${summary.names} | Quantidade: ${summary.quantity}`
)
