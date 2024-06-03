// Variáveis (jeito antigo. Substituido pelo let e const)
var n1 = 10;
var n2 = "5";

// Concatenação de strings
console.log(n1 + n2); // String

// Objetos
var meuObjeto = {}; // chave: valor
var meuArray = [];

// Novas formas de definir variáveis
let x = 10;
const pi = 3.141592;
console.log(x, pi);

// Comparações
console.log("5" == 5); // verdadeiro
console.log("5" === 5); // falso

// Funções
// function (arg1, arg2, arg3, ...) {instruções}
function quadrado(x) {
  return x * x;
}

console.log(quadrado(4));

// Arrow function
const quadrado2 = (x) => x * x;
console.log(quadrado2(4));

// Arrays e listas
const listaNumeros = [1, 2, 3, 4, 5];

console.log("Tamanho da lista: " + listaNumeros.length);

for (let i = 0; i < 5; i++) {
  console.log(listaNumeros[i], quadrado2(listaNumeros[i]));
}

// Usando métodos para adicionar elementos à lista
listaNumeros.push(10);
console.log(listaNumeros);
// pop é um método que exclui o último elemento

// String - concatenação
const string1 = "Valor da string 1";
const string2 = "Valor da string 2";

console.log(string1 + " - " + string2);

// Interpolação
const msg = `Este é o ${string1} e o ${string2}`;
console.log(msg);

// Data e hora
const agora = Date();
console.log(agora);

const natal = new Date(2024, 11, 25);
console.log("Natal: " + natal)
