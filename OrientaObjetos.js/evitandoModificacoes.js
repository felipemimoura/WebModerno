//Object.preventExtensions

const produto = Object.preventExtensions({
  /* não permite adicionar novas chaves/valores, mas permite alterações e apagar algum elemento */
  nome: 'Qualquer',
  preco: 199,
  tag: 'promoção',
});

console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

//Object.seal
/* Perminte somente a alteração dos elementos já presente. */
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));
pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);
