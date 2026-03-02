
//Simulação de Pedidos
const orders = [
  {
    id: 1,
    customer: "João",
    delivered: true,
    items: [
      { name: "Teclado", price: 200, quantity: 1 },
      { name: "Mouse", price: 100, quantity: 2 }
    ]
  },
  {
    id: 2,
    customer: "Maria",
    delivered: false,
    items: [
      { name: "Monitor", price: 1000, quantity: 1 }
    ]
  },
  {
    id: 3,
    customer: "João",
    delivered: true,
    items: [
      { name: "Mousepad", price: 50, quantity: 3 }
    ]
  }
];


//Serviço para gerar o relatório consolidado
const consolidatedRelatory = {

    totalRevenue(orders) {

        return orders.reduce((total, order) => {

            if (!order.delivered) return total;

            const orderTotal = order.items.reduce((sum, item) => {
                return sum + item.price * item.quantity;
            }, 0);

            return total + orderTotal;

        }, 0);

    },

    totalDeliveredOrders(orders) {

        return orders.reduce((total, order) => {

            if (!order.delivered) {return total}

            total +=1

            return total
        }, 0)

    },

    revenueByCustomer(orders) {

        return orders.reduce((total, order) => {

            if(!order.delivered) {return total}

            const totalByCustomer = order.items.reduce((sum, item) => {

                return sum + (item.price ?? 0) * (item.quantity ?? 0)

            }, 0)

            if(!total[order.id]) {

                total[order.id] = {

                    customer: order.customer,

                    revenue: 0
                }
            }

            total[order.id].revenue += totalByCustomer

            return total
        }, {})

    },

    mostSoldProduct(orders) {

        const productCount = orders.reduce((total, order) => {

            if (!order.delivered) {return total}

            order.items.forEach(item => {

                total[item.name] = (total[item.name] || 0) + item.quantity;

            });

            return total

        }, {})

        let mostSold = "";

        let max = 0;

        for (const product in productCount) {

            if (productCount[product] > max) {

            max = productCount[product];

            mostSold = product;
            }
        }

        return mostSold;
    },

}

//Resumo de toda verificação
const reportService = {

  generate(orders) {

    return {
      totalRevenue: consolidatedRelatory.totalRevenue(orders).toLocaleString('pt-br', {style:'currency', currency:'BRL'}),
      totalDeliveredOrders: consolidatedRelatory.totalDeliveredOrders(orders),
      revenueByCustomer: consolidatedRelatory.revenueByCustomer(orders),
      mostSoldProduct: consolidatedRelatory.mostSoldProduct(orders)
    };

  }

};

console.log(reportService.generate(orders));
