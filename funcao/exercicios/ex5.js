function valorEmReais(num1, num2) {
  let valor = (num1 + num2).toFixed(2);
  let valorReal = valor.replace('.', ',');
  return console.log(`R$ ${valorReal}`);
}
valorEmReais(0.1, 0.2);
