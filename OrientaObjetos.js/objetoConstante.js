const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';

console.log(pessoa);

Object.freeze(pessoa); //objeto fica imutavel
pessoa.nome = 'Maria';

console.log(pessoa.nome);
