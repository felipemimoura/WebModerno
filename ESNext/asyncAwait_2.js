function gerarNumerosEntre(min, max, numeroProibidos) {
  if (min > max) {
    [max, min] = [min, max];
  }
  return new Promise((resolve, reject) => {
    const fator = max - min + 1;
    const aleatorio = parseInt(Math.random() * fator) + min;
    if (numeroProibidos.includes(aleatorio)) {
      reject('Número Repetido');
    } else {
      resolve(aleatorio);
    }
    resolve(aleatorio);
  });
}

async function gerarMegaSena(qtdeNumeros) {
  try {
    const numeros = [];
    for (let _ of Array(qtdeNumeros).fill()) {
      numeros.push(await gerarNumerosEntre(1, 60, numeros));
    }
    return numeros;
  } catch {
    throw 'Que Chato';
  }
}
gerarMegaSena(8).then(console.log).catch(console.log);
