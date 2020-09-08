let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo); //Conversão de um algo para boolean

console.log('Os Verdadeiros...');
//Numerps são todos verdadeiros exceto o 0
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'Teste ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('Os falsoss');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));
