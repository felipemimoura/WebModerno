const escola = 'Cod3r';

console.log(escola.charAt(4)); //Mostra o caracter que está nessa posição
console.log(escola.charCodeAt(3)); // trás o código unicode
console.log(escola.indexOf('3')); //retonar a posição do caracter 3
console.log(escola.substring(1)); //retorna o conteudo a partir do indice informado
console.log(escola.substring(0, 3)); //retonar o conteudo desse intervalo
console.log('escola '.concat(escola).concat('!'));
console.log(escola.replace(3, 'e')); //altera o conteudo da letra
console.log('Ana, Maria, Pedro'.split(',')); //transforma o conteudo em um array
