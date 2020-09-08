const valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);

valores[4] = 10; //Também adicona elementos no array
console.log(valores);
console.log(valores.length); //acessa o tamnhao do array

valores.push({ id: 3 }, false, null, 'teste'); ///Array aceita deiversas coisas
console.log(valores);

//Deletando itens de um array
console.log(valores.pop()); //Mostra o último valor e o apaga
console.log(valores);
delete valores[0];
console.log(valores);

console.log(typeof valores);
