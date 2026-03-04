//Transações

const transactions = [
  { id: 1, user: "Ana", type: "compra", value: 150, date: "2024-01" },
  { id: 2, user: "Bruno", type: "compra", value: 300, date: "2024-01" },
  { id: 3, user: "Ana", type: "estorno", value: 50, date: "2024-01" },
  { id: 4, user: "Bruno", type: "compra", value: 100, date: "2024-02" },
  { id: 5, user: "Ana", type: "compra", value: 200, date: "2024-02" },
  { id: 6, user: "Carla", type: "compra", value: 500, date: "2024-02" },
  { id: 7, user: "Carla", type: "estorno", value: 500, date: "2024-03" },
  { id: 8, user: "Bruno", type: "compra", value: 1000, date: "2024-03" },
];

//Serviço de Transações
const transactionsService = {
  getPurchases(transactions) {
    return transactions.reduce((validTransaction, item) => {
      if (item.type !== "compra") return validTransaction;
      validTransaction[item.id] = item;
      return validTransaction;
    }, {});
  },

  getValues(transactions) {
    return transactions.filter((t) => t.type === "compra").map((t) => t.value);
  },

  getChargebacks(transactions) {
    return transactions.reduce((acc, item) => {
      if (item.type !== "estorno") return acc;

      acc[item.user] ??= [];
      acc[item.user].push(item);

      return acc;
    }, {});
  },

  getTotalRevenue(transactions) {
    const total = this.getValues(transactions);

    return total.reduce((total, value) => {
      return total + value;
    }, 0);
  },

  getBiggestPurchase(transactions) {
    return Object.values(this.getPurchases(transactions))
    .reduce((biggest, current) =>
      !biggest || current.value > biggest.value ? current : biggest
    , null);
  },

  getPurchasesMedia(transactions) {
    const values = this.getValues(transactions);

    const total = values.reduce((total, value) => {
      return total + value;
    }, 0);

    return total / values.length;
  },

  getTotalEachCostumer(transactions) {

    const validCostumer = this.getPurchases(transactions)

    return Object.values(validCostumer).reduce((customer, { user, value }) => {

      if (!customer[user]) {
        customer[user] = {
          totalGasto: 0,
          quantidadeCompras: 0
        };
      }

      customer[user].totalGasto += value;
      customer[user].quantidadeCompras += 1;

      return customer;
    }, {})
  },

  generate(transactions) {
    return {
      purchases: this.getPurchases(transactions),
      onlyValues: this.getValues(transactions),
      chargebacks: this.getChargebacks(transactions),
      total: this.getTotalRevenue(transactions),
      biggestPurchase: this.getBiggestPurchase(transactions),
      purchasesMedia: this.getPurchasesMedia(transactions),
      totalEachCostumer: this.getTotalEachCostumer(transactions),
    };
  },
};

console.log(transactionsService.generate(transactions));
