// Declarando variáveis para os elementos que estão no HTML
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const VQVBtn = document.getElementById('generate-board');
const clearBtn = document.getElementById('clear-board');
let colors = ['black', 'green', 'blue', 'red'];

function createColorPalette() {
  for (let color of colors) {
    const newColorInPalette = document.createElement('div');
    newColorInPalette.className = 'color';
    newColorInPalette.id = color;
    newColorInPalette.style.backgroundColor = color;
    colorPalette.appendChild(newColorInPalette);
  }
}

createColorPalette();
document.getElementById('black').classList.add('selected');

function colorSelect(event) {
  // Remove a classe 'selected' da cor selecionada no momento
  const currentColor = document.getElementsByClassName('selected')[0];
  currentColor.classList.remove('selected');
  // Adiciona a classe selected na nova cor
  const newColor = event.target;
  newColor.classList.add('selected');
}

// Adicionando event handler nas cores da paleta
const colorsInPalette = document.getElementsByClassName('color');
for (const color of colorsInPalette) {
  color.addEventListener('click', colorSelect);
}

function clearPixels() {
  // Pinta todos os pixels de branco
  const allPixels = document.querySelectorAll('.pixel');
  for (const pixel of allPixels) {
    pixel.style.backgroundColor = 'white';
  }
}

function paintPixel(event) {
  // Pinta o pixel clicado com a cor atualmente selcionada
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const selectedPixel = event.target;
  selectedPixel.style.backgroundColor = selectedColor;
}

// Adicionando event handler no botao Limpar
clearBtn.addEventListener('click', clearPixels);

function createPixelBoard(n) {
  // Cria o pixel board com tamanho nxn
  for (let boardRow = 1; boardRow <= n; boardRow += 1) {
    const newRow = document.createElement('div');
    newRow.className = 'pixel-row';
    pixelBoard.appendChild(newRow);
    for (let boardColumn = 1; boardColumn <= n; boardColumn += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.style.backgroundColor = 'white';
      newPixel.style.width = '40px';
      newPixel.style.height = '40px';
      newPixel.style.border = '1px solid black';
      newPixel.style.display = 'inline-block';
      // Adicionando event listener no Pixel
      newPixel.addEventListener('click', paintPixel);
      newRow.appendChild(newPixel);
    }
  }
}

function deletePixelBoard() {
  // Exclui o pixel board por inteiro
  pixelBoard.innerHTML = '';
}

function regeneratePixelBoard() {
  // Cria o pixel board novamente com input do usuário
  let userInput = document.getElementById('board-size').value;
  if (userInput > 50) {
    userInput = 50;
  } else if (userInput < 5) {
    userInput = 5;
  }

  if (userInput === '') {
    alert('Board Inválido!');
  } else {
    deletePixelBoard();
    createPixelBoard(userInput);
  }
}

VQVBtn.addEventListener('click', regeneratePixelBoard);

createPixelBoard(5);
