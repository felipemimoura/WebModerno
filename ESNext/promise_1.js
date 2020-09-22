let a = 1;
console.log(a);

let p = new Promise(function (cumprimirPromiesa) {
  cumprimirPromiesa(['Ana', 'Bia', 'Carlos', 'Daniel']);
});

p.then((valor) => valor[0])
  .then((primeiro) => primeiro[0])
  .then((letra) => letra.toLowerCase())
  .then((letraMinuscula) => console.log(letraMinuscula));
