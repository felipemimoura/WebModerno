const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'ipad Pro', preco: 4199, fragil: true },
  { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo de plastico', preco: 18.99, fragil: false },
];

console.log(
  produtos.filter(function (p) {
    return p.preco > 2500;
  })
);
const produtoCaro = (produto) => produto.preco >= 500;
const fragil = (produto) => produto.fragil;

console.log(produtos.filter(produtoCaro).filter(fragil));
