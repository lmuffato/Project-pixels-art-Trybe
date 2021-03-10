//Declarando variáveis para os elementos que estão no HTML
const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const clearBtn = document.getElementById('clear-board');
let colors = ['black', 'green', 'blue', 'red'];

function createColorPalette() {
  for (color of colors) {
    let newColorInPalette = document.createElement('div');
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

// Adicionando event handler no botao Limpar
clearBtn.addEventListener('click', clearPixels);

function createPixelBoard(n) {
  // Criando os pixels
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
      newRow.appendChild(newPixel);
    }
  }
}

createPixelBoard(5);

function addColorToPixel(event) {
  // Pinta o pixel clicado com a cor atualmente selcionada
  let selectedColor = document.querySelector('.selected').style.backgroundColor;
  // selectedColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  const selectedPixel = event.target;
  selectedPixel.style.backgroundColor = selectedColor;
}

// Adicionando event handler nos pixels
const allPixels = document.querySelectorAll('.pixel');
for (const pixel of allPixels) {
  pixel.addEventListener('click', addColorToPixel);
}
