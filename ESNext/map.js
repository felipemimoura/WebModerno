const tecnologias = new Map();
tecnologias.set('React', { framework: false });
tecnologias.set('Angular', { framework: true });

console.log(tecnologias.get('React').framework);

const chavesVariadas = new Map([
  [function () {}, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número'],
]);

chavesVariadas.forEach((vl, ch) => {
  console.log(ch, vl);
});

console.log(chavesVariadas.has(123)); //verifica se existe na coleção
chavesVariadas.delete(123); //apaga o elemento
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size); //mostra quantos elementos estão dentro do map
