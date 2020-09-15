//Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B' }; //O pai está recebendo os atributos do avo
const filho = { __proto__: pai, attr3: ' C' };
console.log(filho.attr1);

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleraMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
  },
};

const ferrari = {
  modelo: 'F40',
  velMax: 324,
};

const volvo = {
  modelo: 'V40',
  status() {
    return `${this.modelo}: ${super.status()}`;
  },
};

//Estabelendo a relação de protpotipo entre dois objetos
Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.aceleraMais(100);
console.log(volvo.status());

ferrari.aceleraMais(300);
console.log(ferarri.status());
