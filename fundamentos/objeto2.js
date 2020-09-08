console.log(typeof Object); //mostra uma funçaõ
console.log(typeof new Object()); //mostra um objeto

const Cliente = function () {};
console.log(typeof Cliente); //mostra uma função
console.log(typeof new Cliente()); //mostra um objeto

class Produto {} //ES2015 (ES6)
console.log(typeof Produto); //mostra uma função
console.log(typeof new Produto()); //mostra um objeto
