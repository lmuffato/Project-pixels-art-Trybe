function colorizePalette() {
  const colorOne = document.getElementById('black');
  colorOne.style.backgroundColor = 'black';
}
colorizePalette();

// Teste do Requisito 8
const colorSelected = document.querySelector('.selected');

function paintPixelBoard(e) {
  e.target.style.backgroundColor = colorSelected;
  console.log('picked color');
}
const paintBoard = document.getElementById('pixel-board');
paintBoard.addEventListener('click', paintPixelBoard);

// Requisito 9

// Requisito 12 - Parte 1 - gera as cores aleatórias --> target.addEventListener(event, function, useCapture)
function randomColors() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}
// Referência usada para a função randomColors:
// https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

// Requisito 12 - Parte 2 - distribuição de cores aleatórias
function distributeRandomColors() {
  document.getElementById('green').style.backgroundColor = randomColors();
  document.getElementById('magenta').style.backgroundColor = randomColors();
  document.getElementById('blue').style.backgroundColor = randomColors();
}
// função que apaga o board para criar um novo
function removeBoard() {
  document.getElementById('board').remove();
}
const btn = document.getElementById('generate-board');
btn.addEventListener('click', removeBoard);

// função que cria novo board

window.onload = function initialize() {
  distributeRandomColors();
};
