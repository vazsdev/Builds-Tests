// Criar uma função que retorne o valor total de cada pedido (FEITO)
//Retornar apenas os pedidos entregues (FEITO)
//Retornar o faturamento total apenas dos pedidos entregues (FEITO)
//Retornar o cliente que mais gastou no total (FEITO)

const orders = [
  {
    id: 1,
    customer: "Vinicius",
    items: [
      { name: "Teclado", price: 200, quantity: 1 },
      { name: "Mouse", price: 100, quantity: 2 }
    ],
    delivered: true
  },
  {
    id: 2,
    customer: "Ana",
    items: [
      { name: "Monitor", price: 900, quantity: 1 }
    ],
    delivered: false
  },
  {
    id: 3,
    customer: "Carlos",
    items: [
      { name: "Headset", price: 300, quantity: 1 },
      { name: "Mousepad", price: 80, quantity: 2 }
    ],
    delivered: true
  }
]

const deliveryService = {

    getTotalrevenue(orders) {
        return orders.reduce((total, item) => {
          if (!item.delivered) {return total}

          const orderTotal = item.items.reduce((sum, product) => {
            return sum + (product.price ?? 0) * (product.quantity ?? 0)
          }, 0)

          return total + orderTotal
        }, 0) 
    },

    getTotalEachCustomer(orders) {
      return orders.reduce((total, order) => {
        if (!order.delivered) {return total}

          const totalOrder = order.items.reduce((sum, product) => {
          return sum + (product.price ?? 0) * (product.quantity ?? 0)
          }, 0)

          total[order.customer] = (total[order.customer] ?? 0) + totalOrder
          return total
      }, {})
    },

    getTopCustomer(orders) {
    const totals = this.getTotalEachCustomer(orders)

    return Object.entries(totals).reduce((top, [customer, total]) => {

        if (total > top.total) {
        return { customer, total }
        }

        return top

    }, { customer: "", total: 0 })
    },

    getSummary(orders) {
        return {
            TopCustomer: this.getTopCustomer(orders),
            TotalEachCustomer: this.getTotalEachCustomer(orders),
            TotalRevenue: this.getTotalrevenue(orders)
        }
     }

}


const formatedSummary = {

  getFormatedSummary(summary) {
    Object.fromEntries(
      Object.entries(summary.TotalEachCustomer).map(
        ([customer, total]) => [
          customer,
          total.toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
          })
        ]
      )
    )
  }
}

const summary = deliveryService.getSummary(orders)

const summaryEachCustomerFormated = Object.fromEntries(
  Object.entries(summary.TotalEachCustomer).map(
    ([customer, total]) => [
      customer,
      total.toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL"
      })
    ]
  )
)

const summaryTopCustomerFormated = Object.fromEntries(
  Object.entries(summary.TopCustomer).map(
    ([customer, total]) => [
      customer,
      total.toLocaleString('pt-BR', {
        style: "currency",
        currency: "BRL"
      })
    ]
  )
)

console.log(summaryTopCustomerFormated)
console.log(summary.TotalRevenue.toLocaleString('pt-br', {style: "currency", currency: "BRL"}))
console.log(summaryEachCustomerFormated)
