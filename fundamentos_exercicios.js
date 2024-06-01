// Exercícios de fundamentos
// Exercício 1: Olá Mundo.
console.log("Olá Mundo!");

// Exercício 2: conversão de tipo
const numeroString = "1234";
const numero = Number(numeroString);
console.log(typeof numeroString);
console.log(typeof numero);

// Exercício 3: Manipulação de strings
// Quantos caracteres e quantas palavras a string tem

const minhaString = "Javascript é incrível";
const qtdPalavras = minhaString.split(" ").length;
console.log("Quantidade de caracteres: " + minhaString.length);
console.log("Quantidade de palavras: " + qtdPalavras);

// Exercício 4: loops e arrays
// Varrer uma lista de nomes
const listaNomes = ["Ana", "João", "Matias", "Carina", "Roberto"];

for (let i = 0; i < listaNomes.length; i++) {
  console.log(listaNomes[i]);
}

// Exercício 5: funções, strings e maths
// Crie uma função que transforma hora, no formato 24h para o formato 12h, usando math

function convert24to12(horaFormato24) {
  const hora = Number(horaFormato24.split(":")[0]);
  const minuto = Number(horaFormato24.split(":")[1]);

  if (hora <= 23 && hora >= 12 && minuto <= 59) {
    return hora - 12 + ":" + String(minuto).padStart(2, "0") + " PM";
  } else {
    return hora + ":" + String(minuto).padStart(2, "0") + " PM";
  }
}

console.log(convert24to12("14:23"));
