function tratarErroELancar(erro) {
  //throw new Error('.....');
  throw 110;
}

function imprimirNomeGritando(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!!');
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log('final');
  }
}

const obj = { name: 'Roberto' };
imprimirNomeGritando(obj);
