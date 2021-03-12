// Bloco de declaração de variáveis
// const palette = document.getElementById('color-palette');
const colorsOfPalette = document.getElementsByClassName('color');
const simpleColors = ['#000000', '#800000', '#ff0000', '#999966', '#ffff00 ', '#009900', '#00ff00', '#008080', '#00ffff', '#000080', '#0000ff', '#800080', '#ff00ff'];
const pixelBord = document.getElementById('pixel-board');
const pixels = document.getElementsByClassName('pixel');
const buttonClear = document.getElementById('clear-board');
const sizeValue = document.getElementById('board-size');
const buttonResize = document.getElementById('generate-board');
let size = sizeValue.value;
let colorSelected = document.querySelector('.selected');

// Bloco de declaração de funções

function generateRandomArray() {
  const randomArray = [0];
  for (let index = 0; index < colorsOfPalette.length - 1; index += 1) {
    randomArray.push(Math.ceil(Math.random() * (simpleColors.length - 1)));
  }
  randomArray.sort();
  return randomArray;
}

function generateRandomOrder() {
  let orderArray = generateRandomArray();
  for (let index = 0; index < orderArray.length; index += 1) {
    if (orderArray[index] === orderArray[index + 1]) {
      orderArray = generateRandomArray();
      index = -1;
    }
  }
  return orderArray;
}

function montPalette(tableColors) {
  const orderColor = generateRandomOrder();
  for (let color = 0; color < colorsOfPalette.length; color += 1) {
    colorsOfPalette[color].style.backgroundColor = tableColors[orderColor[color]];
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
    const pixelToBeColored = event.target;
    pixelToBeColored.style.backgroundColor = colorSelected.style.backgroundColor;
  }
}

function clearBoard() {
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

function sizeIsValid(test) {
  let result = true;
  if (test === '') {
    alert('Board inválido!');
    result = false;
  }
  if (test < 5) {
    // alert('O tamanho mínimo do desenho é 5x5 pixels');
    size = 5;
  }
  if (test > 50) {
    // alert('O tamanho máximo do desenho é 50x50 pixels');
    size = 50;
  }
  return result;
}

function createLineBoard(sizeLine) {
  const pixelLine = document.createElement('tr');
  for (let index2 = 0; index2 < sizeLine; index2 += 1) {
    const newPixel = document.createElement('td');
    newPixel.className = 'pixel';
    newPixel.addEventListener('click', colorPixel);
    newPixel.style.backgroundColor = '#ffffff';
    pixelLine.appendChild(newPixel);
  }
  return pixelLine;
}
function resizePixelBoard() {
  size = sizeValue.value;
  if (sizeIsValid(size)) {
    sizeValue.value = size;
    pixelBord.innerHTML = '';
    for (let index1 = 0; index1 < size; index1 += 1) {
      const newPixelLine = createLineBoard(size);
      pixelBord.appendChild(newPixelLine);
    }
  }
}

// Bloco de ações de inicialização do código

// for (let color = colorsOfPalette.length; color < simpleColors.length; color += 1) {
//   const newColor = document.createElement('th');
//   newColor.className = 'color';
//   newColor.id = `color${color}`;
//   palette.appendChild(newColor);
// }
montPalette(simpleColors);

// bloco de carregamento do escutadores de eventos

for (let color = 0; color < colorsOfPalette.length; color += 1) {
  colorsOfPalette[color].addEventListener('click', selectColor);
}

for (let pixel = 0; pixel < pixels.length; pixel += 1) {
  pixels[pixel].addEventListener('click', colorPixel);
}

buttonClear.addEventListener('click', clearBoard);

buttonResize.addEventListener('click', resizePixelBoard);
