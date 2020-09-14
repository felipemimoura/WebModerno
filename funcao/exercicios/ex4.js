/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores */

const divisao = function (num1, num2) {
  console.log(`A divisão entre ${num1} / ${num2} = ${num1 / num2}`);
  console.log(`O módulo da divisão entre ${num1} % ${num2} = ${num1 % num2}`);
};

divisao(10, 3);
