/* const firstColorPalette = document.getElementById('black');
const secondColorPalette = document.getElementById('green');
const thirdColorPalette = document.getElementById('magenta');
const fourthColorPalette = document.getElementById('blue');
const colors = firstColorPalette || secondColorPalette || thirdColorPalette || fourthColorPalette;

secondColorPalette.addEventListener('click', () => {
  if (secondColorPalette.classList.add('selected')) {
    firstColorPalette.className.removeClass('selected');
    thirdColorPalette.className.removeClass('selected');
    fourthColorPalette.className.removeClass('selected');
  }
});

thirdColorPalette.addEventListener('click', () => {
  if (thirdColorPalette.classList.add('selected')) {
    firstColorPalette.className.removeClass('selected');
    secondColorPalette.className.removeClass('selected');
    fourthColorPalette.className.removeClass('selected');
  }
});

fourthColorPalette.addEventListener('click', () => {
  if (fourthColorPalette.classList.add('selected')) {
    firstColorPalette.className.removeClass('selected');
    secondColorPalette.className.removeClass('selected');
    thirdColorPalette.className.removeClass('selected');
  }
});
function setColor() {
  const color = document.querySelector('.selected');
  const bgColor = window.getComputedStyle(color, null).getPropertyValue('background-color');
  return bgColor;
}
setColor.addEventListener('click'(colors));

/* function colorSelection(colors) {
  const colors = document.getElementById('cor-verde');
  colors.style.setItem ('color', backgroundColor);
} */
// document.getElementById('elemento').classList.add('classe'); // Adiciona classe.

/* REQUISITOS FALTANTES

 7 - Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.

A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

Somente uma das cores da paleta deve ter a classe selected de cada vez;

Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.

O que será verificado:

Verifica se somente uma cor da paleta de cores tem a classe selected de cada vez

Verifica se os pixels dentro do quadro não têm a classe selected quando são clicados

--> 8 - Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.

O que será verificado:

Verifica se ao carregar a página deve ser possível pintar os pixels de preto

Verifica se após selecionar uma outra cor na paleta, é possível pintar os pixels com essa cor

Verifica se somente o pixel que foi clicado foi preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

--> 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.

O que será verificado:

Verifica se o botão tem o id denominado clear-board

Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels

Verifica se o texto do botão é 'Limpar'

Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco
Requisitos Bônus:

10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.

Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de N pixels de largura e N pixels de altura, onde N é o número inserido no input;

Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

O input deve ter o id denominado board-size e o botão deve ter o id denominado generate-board;

O input só deve aceitar número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input;

O botão deve conter o texto "VQV";

O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

O botão deve estar posicionado ao lado do input;

Se nenhum valor for colocado no input ao clicar no botão, mostre um alert com o texto: "Board inválido!";

O novo quadro deve ter todos os pixels preenchidos com a cor branca.

O que será verificado:

Verifica se existe um input com o id board-size

Verifica se existe um botão com o id generate-board

Verifica se o input só aceita número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input

Verifica se o botão contém o texto 'VQV'

Verifica se o input está posicionado entre a paleta de cores e o quadro de pixels

Verifica se o botão está posicionado ao lado do input

Verifica se nenhum valor for colocado no input ao clicar no botão, um alert é exibido com o texto: 'Board inválido!'

Verifica se ao clicar no botão com um valor preenchido, o tamanho do board muda.

Verifica se o novo quadro tem todos os pixels preenchidos com a cor branca

11 - Limite o tamanho mínimo e máximo do board.

Caso o valor digitado no input board-sze fuja do intervalo de 5 a 50, faça:

Valor menor que 5, considerar 5 como padrão;

Valor maior que 50, considerar 50 como padrão.

O que será verificado:

Verifica se a altura máxima do board é 50

Verifica se a altura do board é 5 quando um valor menor é colocado no input

Verifica se a altura do board é 50 quando um valor maior é colocado no input

12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.

A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.
O que será verificado:

Verifica se as cores geradas na paleta são diferentes a cada carregamento da página

Verifica se a cor preta ainda está presente e é a primeira na sua paleta de cores

*/
