//03)​ Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
function expoente(base, expoente) {
  let expo = Math.pow(base, expoente);
  console.log(`O ${base} elevado ao ${expoente} = ${expo}`);
}
expoente(8, 2);
