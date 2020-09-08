// function sem retonor

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); //mostra um NaN
imprimirSoma(2, 10, 4, 5, 6, 7); //Faz a função com os parametros definidos no escopo e ignora o resto
imprimirSoma(); //retornar um NaN

//funcao com retornos
function soma(a, b = 1) {
  //Devine o valor b como padrão
  return a + b;
}

console.log(soma(2, 3)); //aceita os parametros
console.log(soma(2)); // Utiliza os padrões
console.log(soma()); //retorna um NaN
