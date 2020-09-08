//Novo recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua Abc',
    numero: 1000,
  },
};
//extraindo as informações
const { nome, idade } = pessoa;
console.log(nome, idade);
//extraindo informações e criando variáveis
const { nome: n, idade: i } = pessoa;
console.log(n, i);

//Informações inexistentes e atribuição padrao
const { sobrenome, bemHumorada = true } = pessoa;
console.log(sobrenome, bemHumorada);

//informações dentro de um objeto dentro de um objeto
const {
  endereco: { logradouro, numero, cep },
} = pessoa;
console.log(logradouro, numero, cep);
