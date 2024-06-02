// Exercícios de manipulação de array

// Crie uma lista de compras inicialmente vazia.
// Adicione cinco itens à lista usando push().
// Remova o primeiro item da lista usando shift().
// Imprima a lista final.

// Criar lista vazia
const compras = [];
// Adicionar cinco itens
compras.push("tomate", "abacate", "limão", "azeite", "alho");
// Remover o primeiro item
compras.shift();
// Imprimir
console.log(compras);

// Exercício de manipulação de array - find()
// Array de números [3, 7, 14, 21, 29, 36]
// Encontrar o primeiro número que é maior que 10 e divisível
//   por 7.

const listaNumeros = [3, 7, 14, 21, 29, 36, 42];
const primeiroMaior10 = listaNumeros.find((num) => num % 7 === 0 && num > 10);
console.log(primeiroMaior10);

// Exercício de manipulação de array - filter()
// Array de números [5, 10, 15, 20, 25, 30, 35, 40]
// Encontrar lista com maiores que 20.

const listaNumeros2 = [5, 10, 15, 20, 25, 30, 35, 40];
const maiores20 = listaNumeros2.filter((num) => num > 20);
console.log(maiores20);

// Exercício de manipulação de string
// Data a string " Bom dia, mundo! ", remova os espaços em
//   branco, no início e no fim da string, e divida a string
//   em palavras

let minhaString = " Bom dia, mundo! ";
minhaString = minhaString.trim();
const palavrasDaString = minhaString.split(" ");
console.log(palavrasDaString)

// Exercício de manipulação de string - startsWith() e endWith()
// Dada a frase "O rato roeu a roupa do rei de Roma", verificar
//   se a string começa com a letra "o" e termina com a palavra
//   "Roma".

function chkFrase(frase) {
    return frase.startsWith('O') && frase.endsWith('Roma') ? true : false
}

const frase = "O rato roeu a roupa do rei de Roma";
console.log(chkFrase(frase))
