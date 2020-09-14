//Colação dinâmica de pares chaves/valor
//criando um objeto através de uma função construtora
const produto = new Object();
//passando chaves/valores para um objeto
produto.nome = 'cadeira';
produto['marca do produto'] = 'Generia'; //Exitar
produto.preco = 220;

console.log(produto);

//apagando chaves/valores
delete produto.preco;
delete produto['marca do produto'];
console.log(produto);

//objetos dentro de objetos
const carro = {
  modelo: 'A4',
  preco: 89000,
  proprietario: {
    nome: 'Felipe',
    idade: 26,
    endereco: {
      logadouro: 'Rua ABC',
      numero: 123,
    },
  },
  condutores: [
    {
      nome: 'Francisco',
      idade: 56,
    },
    {
      nome: 'Vera',
      idade: 49,
    },
  ],
};

//acessando informações
carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logadouro'] = 'Av Gigante';

console.log(carro);

//Apagando o objeto dentro o objeto
delete carro.condutores;
delete carro.proprietario.endereco;
