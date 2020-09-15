const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c;
  },
};

//convertendo Objeto em JSON
console.log(JSON.stringify(obj));

//transformando um JSON em um obj
console.log(JSON.parse('{"a":1, "b":2, "c":3}'));
console.log(JSON.parse('{"a":1, "b": "string", "c": true, "d":{}, "e": []}'));
