const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
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

function selectBlackOnload() {
  document.getElementById('black').classList.add('selected');
}

function addEventListenerToColorPalette() {
  const colorsInPalette = document.getElementsByClassName('color');
  for (const color of colorsInPalette) {
    color.addEventListener('click', function colorSelect(event) {
      // remove the selected class from previous color
      const currentColor = document.getElementsByClassName('selected')[0];
      currentColor.classList.remove('selected');
      // add the selected class to new color
      const newColor = event.target;
      newColor.classList.add('selected');
    });
  }
}

function addColorToPixel(event) {
  let selectedColor = document.getElementsByClassName('selected')[0];
  selectedColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
  const selectedPixel = event.target;
  selectedPixel.style.backgroundColor = selectedColor;
}

function clearPixels() {
  const allPixels = document.querySelectorAll('.pixel');
  for (const pixel of allPixels) {
    pixel.style.backgroundColor = 'white';
  }
}

window.onload = function onload() {
  createColorPalette();
  addEventListenerToColorPalette();
  selectBlackOnload();
};

createPixelBoard(11);

const allPixels = document.querySelectorAll('.pixel');
for (const pixel of allPixels) {
  pixel.addEventListener('click', addColorToPixel());
}

const clearBtn = document.getElementById('clear-board');
clearBtn.addEventListener('click', clearPixels());