//Transações

const transactions = [
  { id: 1, user: "Ana", type: "compra", value: 150, date: "2024-01" },
  { id: 2, user: "Bruno", type: "compra", value: 300, date: "2024-01" },
  { id: 3, user: "Ana", type: "estorno", value: 50, date: "2024-01" },
  { id: 4, user: "Bruno", type: "compra", value: 100, date: "2024-02" },
  { id: 5, user: "Ana", type: "compra", value: 200, date: "2024-02" },
  { id: 6, user: "Carla", type: "compra", value: 500, date: "2024-02" },
  { id: 7, user: "Carla", type: "estorno", value: 500, date: "2024-03" },
  { id: 8, user: "Bruno", type: "compra", value: 250, date: "2024-03" },
];

const transactionsService = {
  getValidTransactions(transactions) {
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
    return transactions.reduce((chargebacks, item) => {
      if (item.type !== "estorno") return chargebacks;
      chargebacks[item.user] = item.type;
      return chargebacks;
    }, {});
  },

  generate(transactions) {
    return {
      validTransactions: this.getValidTransactions(transactions),
      onlyValues: this.getValues(transactions),
      chargebacks: this.getChargebacks(transactions),
    };
  },
};

console.log(transactionsService.generate(transactions));
