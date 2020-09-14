//Usando a notação literaç
const obj1 = {};
console.log(obj1);

//Objeto em JS
console.log(typeof Object, typeof new Object());
const obj2 = new Object();
console.log(obj2);

//criando uma função construtura
function Produto(nome, preco, desc) {
  this.nome = nome; //this. deixa o elemento visivel além do escopo da função
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc);
  };
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('Notebook', 2988.99, 0.25);

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas);
    },
  };
}

const f1 = criarFuncionario('João', 7980, 4);
const f2 = criarFuncionario('Maria', 11400, 1);
console.log(f1.getSalario(), f2.getSalario());

//Oject.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

//Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}');
console.log(fromJSON.info);
