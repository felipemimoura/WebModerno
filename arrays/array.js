console.log(typeof Array, typeof new Array(), typeof []);

//Criando Arrays
let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];

//acessando dados
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); //retorno undefine

//adicionando elementos
aprovados[3] = 'Paulo'; //Não recomendado para adicionar e sim para modificar
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados);

//ordenadação dos elementos
aprovados.sort();
console.log(aprovados);

//apagando elementoos
delete aprovados[1];
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 0, 'Elemento1'); //splice adicona ou exclui elementos
console.log(aprovados);
