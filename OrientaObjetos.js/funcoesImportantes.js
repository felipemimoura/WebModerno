const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13,
};
console.log(Object.keys(pessoa)); //Pega as chaves do objeto
console.log(Object.values(pessoa)); //pega os valores
console.log(Object.entries(pessoa)); //Separa os elementos do objeto em arrays

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNacimento', {
  enumerable: true,
  writable: false,
  value: '01/01/2019',
});
pessoa.dataNacismento = '01/01/2017';
console.log(pessoa.dataNacismento);
console.log(Object.keys(pessoa));

//Object.assing(ECMASCRIPT 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2);
console.log(obj);
