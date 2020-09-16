const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); //Remove o ultimo elemento
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift(); //apaga o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton'); //adicona na primeira posição
console.log(pilotos);

//splice
pilotos.splice(2, 0, 'Botas', 'Massa');
console.log(pilotos);

//removendo
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //gera um novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);
