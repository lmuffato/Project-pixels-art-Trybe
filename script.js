console.log('começou a rodar o javaScript');

// Bloco de declaração de variáveis

const palette = document.getElementsByClassName('color');
const simpleColors = ['#000000', '#800000', '#ff0000', '#999966', '#ffff00 ', '#009900', '#00ff00', '#008080', '#00ffff', '#000080', '#0000ff', '#800080', '#ff00ff'];
const pixels = document.getElementsByClassName('pixel');
const buttonClear = document.getElementById('clear-board');
const sizeValue = document.getElementById('board-size');
const buttonResize = document.getElementById('generate-board');
let colorSelected = document.querySelector('.selected');

// Bloco de declaração de funções

function montPalette(tableColors) {
  for (let color = 0; color < palette.length; color += 1) {
    palette[color].style.backgroundColor = tableColors[color];
  }
}

function selectColor(event) {
  if (event.target !== colorSelected) {
    colorSelected.className = 'color';
    colorSelected = event.target;
    colorSelected.className = 'color selected';
  }
}

function colorPixel(event) {
  if (event.target.style.backgroundColor !== colorSelected.style.backgroundColor) {
    event.target.style.backgroundColor = colorSelected.style.backgroundColor;
  }
}

function clearBoard() {
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

function resizePixelBoard() {
  const size = sizeValue.value;
  console.log(size);
}

// bloco de carregamento do escutadores de eventos

for (let color = 0; color < palette.length; color += 1) {
  palette[color].addEventListener('click', selectColor);
}

for (let pixel = 0; pixel < pixels.length; pixel += 1) {
  pixels[pixel].addEventListener('click', colorPixel);
}

buttonClear.addEventListener('click', clearBoard);

buttonResize.addEventListener('click', resizePixelBoard);

// Bloco de ações de inicialização do código

montPalette(simpleColors);
