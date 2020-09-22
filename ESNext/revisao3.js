//ES8 Object.values / object.entries
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj)); //Trás as chaves dos objetos
console.log(Object.values(obj)); //Trás os valores do objeto
console.log(Object.entries(obj));

//Melhorias na notação literal
const nome = 'Carla';
const pessoa = {
  nome,
  ola() {
    return 'Oi gente';
  },
};

console.log(pessoa.nome, pessoa.ola());

//Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Au Au';
  }
}

console.log(new Cachorro().falar());
