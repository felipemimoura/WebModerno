const { times } = require('lodash');

//Não aceita repetição/Não indexada
const time = new Set();
time.add('Vasco');
time.add('São Paulo').add('Palmeiras').add('Corinthias');
time.add('Flamengo');
time.add('Vasco');

console.log(time);
console.log(time.size);
console.log(time.has('Vasco')); //identico ao valor informado
console.log(time.delete('Flamengo'));
console.log(time.has('Flamengo'));

const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas'];
const nomeSet = new Set(nomes);

console.log(nomeSet);
