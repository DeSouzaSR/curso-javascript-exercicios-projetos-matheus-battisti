// Avançando em JavaScript

// Manipulação de arrays

const frutas = ["maça", "laranja"];
console.log(frutas);

// Adicionando elemento no fim do array
frutas.push("carambola");
console.log(frutas);

// Adicionando elemento no início do array
frutas.unshift("acerola");
console.log(frutas);

// Removendo do fim do array
frutas.pop();
console.log(frutas);

// Removendo do início do array
frutas.shift();
console.log(frutas);

// find, filter, map, reduce. Muitos usados com arrow functions
// Find --> retorna o primeiro elemento de um critério
const numeros = [1, 2, 3, 4, 5, 6];
const primeiroPar = numeros.find((num) => num % 2 === 0);
console.log(primeiroPar);

// Filter --> retorna todos os elementos que atendam o critério
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares);

// Manipulação de strigs
// Trim() --> para remover espaços extras
// mas só tira os espaços dos extremos
const frase = " Olá, mundo!    ";
const frasetrtada = frase.trim();

console.log('Frase inicial: "' + frase + '"');
console.log('Frase tratada: "' + frasetrtada + '"');

// Uma vez tendo consertada a frase, podemos usar o split
console.log(frasetrtada.split(" "));

//Verificando se uma string começa com uma substring
const frase2 = "JavaScript é incrível";

console.log(frase2.startsWith("Java")); // Case sensitive

//Verificando se uma string termina com uma substring
console.log(frase2.endsWith("incrível")); // Case sensitive

// // Exceções e tratamento de erros
// const idade = 15;
// if (idade < 18) {
//     // throw executa a ação. E o Error para o programa
//     // enquanto não corrigir o erro, o programa não
//     // executa mais.
//     throw new Error("Você deve ser maior de idade!");
// }
// console.log("Isto não é executado")

// Com o try-catch, tratamos o erro, mas continuamos o fluxo
try {
  const idade = 15;
  if (idade < 18) {
    throw new Error("Você deve ter mais de 18 anos!");
  }
} catch (error) {
  console.log("Deu ruim");
  console.log(error);
}

console.log("Continua o programa");

// O exemplo acima ficou confuso e antididático. Criando um exemplo prórpio
const numero1 = 2;
try {
  if (numero1 !== 1) throw console.log("Este número não é 1");
} catch (error) {
  console.log("Este número deveria ser 1");
}

console.log("Continua o programa");

// Callback ---> função que é executada após a chamada de uma
//   função
function cumprimentar(nome, minhacallback) {
  console.log("Olá, ", nome);
  minhacallback();
}

function mostrarSaudacao() {
  console.log("Como você está?");
}

cumprimentar("Sandro", mostrarSaudacao);

// Aceita funções anônimas
// Vou repetir o último uso da função, porém sem precisar
//  definiar a callback separado. Já uso a callbakc na definição
//  da primeira função.
cumprimentar("Sandro", function () {
  console.log("Como você está?");
});

// // Usando callback para inserir um atraso
// // setTimeout ---> executa algo depois de um tempo
// function mostrarMensagem() {
//   console.log("Esta mensagem é exibida após 3 segundos");
// }

// mostrarMensagem(); // aqui não esperou 3 segundos.
// console.log("...só que não")

// // Mas se usarmos a mostrarMensagem() como uma callback da
// //  setTimeOut, a msg será exibida depois de tempo determinado

// setTimeout(mostrarMensagem, 3000);

// Promises
// Executa uma ação se uma "promessa" for cumprida
// O objeto Promissa usa uma arrow funciction com dois argumentos
//   resolve, reject
// const promessa = new Promise((resolve, reject) => {
//   const condicao = true;
//   if (condicao) {
//     resolve("A condição é verdadeira");
//   } else {
//     reject("A condição é falsa");
//   }
// });

// // Para usar uma Promise, temos diversos métodos
// promessa
//   .then((mensagem) => {
//     console.log(mensagem);
//   })
//   .catch((erro) => {
//     console.log(erro);
//   });

// Promises podem ser substituidas por async await. Mas muitas
//   bibliotecas são baseadas em Promises e, portanto, aceitam
//   coisa tipo try-catch. O async await é baseado em funções,
//   então é mais simples

// Uso legal de Promises é aguardar que várias promessas sejam
//   cumpridas
// const promessa1 = Promise.resolve(3); // jeito compacto e direto
// const promessa2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2500, "testando");
// });

// Promise.all([promessa1, promessa2]).then((valores) => console.log(valores));

// Async Await
/**
 * Async e Await são keywords introduzidas no ECMAScript 2017 (ES7)
 * para simplificar o gerenciamento de código assíncrono em
 * JavaScript.
 *
 * Async: A keyword async é usada para marcar uma função como
 * assíncrona.
 *
 * Await: A keyword await é usada antes de uma expressão que
 * retorna uma Promise. O valor resolvido da Promise é então
 * disponibilizado para a função continuar sua execução.
 *
 * O Async Await só pode ser usado dentro de funções async.
 * O await só pode ser usado antes de expressões que retornam
 * Promises.
 * O Async Await não bloqueia a thread principal do JavaScript.
 */

const promessa3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Valor obtido"), 2000);
});

async function obterValor() {
  const valor = await promessa3;
  console.log(valor);
}

obterValor() // chamado primeiro que o "blabla"
console.log("blabla") //"blabla" é exibido, enquanto obterValor
                      // espera

// JSON (Javascript Object Notation)
// Estrutura com "chave":"valor"
// Padroniza a comunicação entre frontend e backend
// Parei aqui.