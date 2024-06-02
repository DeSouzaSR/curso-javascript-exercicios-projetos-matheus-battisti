// DOM - Document Object Model
/**
 * O Modelo de Documento por Objetos (do inglês Document Object Model - DOM)
 * é uma convenção multiplataforma e independente de linguagem de programação,
 * fiscalizada pela entidade World Wide Web Consortium (W3C), para
 * representação e interação com objetos em documentos HTML, XHTML e, XML.
 * Os elementos/nós de cada documento são organizados em uma estrutura de
 * árvore, chamada de Árvore DOM, que endereça e manipula via uso de
 * funções/métodos (interface pública) sobre os objetos, especificada de
 * acordo com a interface de programação de aplicações (API) utilizada, que
 * oferece uma maneira padrão de se acessar cada elemento de um documento,
 * criando páginas altamente dinâmicas.
 */

// Selecionar elementos
// Como achar, por exemplo, o H1 na página html?
const elementoPorId = document.getElementById("meuId"); // Este "meuId" está definido lá no HTML
console.log(elementoPorId);

// querySelector
// O método acima é antigo. Hoje temos outro método
const elementoPorId2 = document.querySelector("#meuId");
console.log(elementoPorId2);
// usando esta segunda forma, temos resultados consistentes. É a mesma
//   estrutura para tudo.
// Por exemplo, para acessar a classe
const elementoPorClasse = document.querySelector(".minhaClasse");
console.log(elementoPorClasse);

// Manipular conteúdo do texto
// seleciona novamente o elemento
const element = document.querySelector("#meuId");
console.log(element.textContent);
element.textContent = "Mudei de texto";
console.log(element.textContent);

// Além de manipular os conteúdos, podemos também trabalhar com os atributos
// Podemos trocar o src de uma imagem ou o href de um link
const link = document.querySelector("a"); // seleciona o primeiro atributo a (link)
console.log(link);
link.setAttribute("href", "https://horadecodar.com.br/cursos"); // Muda o link
console.log(link.getAttribute("href")); // Pega o atributo
console.log(link.getAttribute("target"));
link.removeAttribute("target"); // Remove um atributo. No caso, o target _black

// Manipulação de classes
// Adiciona uma classe
const element2 = document.querySelector("#meuId");
element2.classList.add("novaClasse");
// Remove uma classe
element2.classList.remove("minhaClasse");
// Coloca, se não tiver, e tira, se já tiver
element2.classList.toggle("outraClasse");

// Manipular o css
const element3 = document.querySelector("#meuId");
element3.style.color = "white"; // Sobreescreve a classe porque tem prioridade, é inline
element3.style.backgroundColor = "darkblue"; //palavras separadas por traço no css, viram camelcase, no JS

//Observação: melhor fazer por classes, para dividir responsabilidades

// Navegação entre nós (lembrando que o DOM é uma árvore)
const element4 = document.querySelector("#meuInput");
// Obter o elemento pai
const pai = element4.parentNode;
console.log(pai); // input tem como pai o formulário
// Obter o primeiro filho de pai
const primeiroFilho = pai.firstChild;
console.log(primeiroFilho);
// Obter o último filho
const ultimoFilho = pai.lastChild;
console.log(ultimoFilho);

// Manipulando a estrutura do DOM
const novoElemento = document.createElement("div");
console.log(novoElemento);
novoElemento.textContent = "Minha div de JavaScript";
console.log(novoElemento);
document.body.appendChild(novoElemento);

// Parei aqui. O autor ia começar a falar em Eventos
