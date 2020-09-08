const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!'; //Concatenação simples
const template = `Olá ${nome}! `; //Template engine

console.log(concatenacao, template);

//expressoões
console.log(`1 + 1 = ${1 + 1}`);
const up = (texto) => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}`);
