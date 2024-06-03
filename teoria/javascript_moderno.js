// JavaScript Moderno - ES6+

/////////// let e const/////////////
let n = 10;
n = 20;

const x = 15;
// x = 10; // não permitido

// verificando as fragilidades com o "var"
function testeVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}

testeVar();

// Melhorando a vunerabilidade acima com o "let"
// Neste segundo caso, o let faz com que valham
//   as regras de escopo.

function testeLet() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}

testeLet();

///////////// Arrow function//////////
const soma = (a, b) => a + b;
console.log(soma(2, 3)); // 5

const cumprimento = (nome) => {
  const mensagem = `Olá, ${nome}`;
  return mensagem;
};

console.log(cumprimento("Sandro"));

///////// Template literals//////////
const nome = "Maria";
const idade = 23;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
// ${} aceita uma instrução JavaScript completa.

/////////// Destructuring --> desestruturação///////////
const numeros = [1, 2, 3, 4];
const [primeiro, segundo] = numeros;
console.log(primeiro, segundo);

const pessoa = { nome: "João", idade: 40, profissao: "Programador" };
const { nome: nome2, idade: idade2, profissao } = pessoa;
console.log(nome2, idade2, profissao);

//////////// Spread operator --> espalhamento//////////
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5, 6];
console.log(array2);

//////////// usando spread com reduce//////////
const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0);
// o zero acima é para começar com o valor inicial zero.
console.log(soma2(1, 2, 3, 4, 5));

///////// default parameters  (como no Python)///////////
function saudacao(nome = "visitante") {
  console.log(`Olá, ${nome}`);
}

saudacao();
saudacao("Maria");

////////// Object literals enhancements//////////
// {nome: "Matheus"}
// É como se fosse um Destructuring ao contrário

const nomeNovo = "Felipe";
const idadeNova = 24;
const pessoaNova = { nomeNovo, idadeNova }; // Pode usar novo nome { nome: nomeNovo, idade: idadeNova }
console.log(pessoaNova);

//Podemos usar as vantagens da orientação a objetos, sem mesmo definir
//   o objeto explicitamente
const saudacaoObject = {
  dizerOi() {
    console.log("Oi");
  },
};

saudacaoObject.dizerOi();

//////////// Classes e heranças //////////////
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`Olá, pessoal, meu nome é ${this.nome}`);
  }
}

const joao = new Pessoa("João", 34);
console.log(joao);
joao.falar();

// planet
class Planeta {
  constructor(nome, distancia) {
    this.nome = nome;
    this.distancia = distancia;
  }
}

const mercury = new Planeta("Mercury", 0.38);
console.log(mercury);
console.log(`Distância de ${mercury.nome} é ${mercury.distancia}`);

// Heranças
class Funcionario extends Pessoa {
  constructor(nome, idade, salario) {
    super(nome, idade); // não precisa usar this, pois herdou
    this.salario = salario;
  }

  falarFuncionario() {
    super.falar();
    console.log(`Eu ganho R$ ${this.salario}`);
  }
}

const mario = new Funcionario("Mario", 44, 3200);
console.log(mario);
mario.falar();
mario.falarFuncionario();
