// Armazenando uma função em uma variavels

const imprimirSoma = function (a, b) {
  //função anonima
  console.log(a + b);
};
imprimirSoma(2, 3);

//Armazendo um função arrow em uma variavels
const soma = (a, b) => {
  return a + b;
};
console.log(soma(2, 3));

//retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(5, 3));
const imprimir2 = (a) => console.log(a);
imprimir2('Legal!!!!');
