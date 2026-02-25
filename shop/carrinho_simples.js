// Proposta: Sistema de carrinho simples

const carrinho = [
  { nome: "Teclado", preco: 200, quantidade: 1 },
  { nome: "Mouse", preco: 100, quantidade: 1 },
  { nome: "Monitor", preco: 800, quantidade: 2 },
  { nome: "Mousepad", preco: 15, quantidade: 1 },
  { nome: "Fone de Ouvido", preco: 200, quantidade: 1 },
  { nome: "Cadeira", preco: 1280, quantidade: 1 }
]

function calcularTotal(carrinho) {
    return carrinho.reduce((total, item) => {
        if (item.quantidade > 0) {
            return total + item.preco * item.quantidade
        }
        return total
    }, 0)
}

const totalCarrinho = calcularTotal(carrinho)
console.log(
  `Total: ${totalCarrinho.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  })}`
)
