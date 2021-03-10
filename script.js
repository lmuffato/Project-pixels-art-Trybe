const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const clearBtn = document.getElementById('clear-board');
const paletteColors = ['black', 'blue', 'red', 'green'];
let selectedColor = 0;
const boardSize = 5;

// Functions
function setPaletteColors() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    if (index === selectedColor) {
      colorDiv.classList.add('selected');
    }
    colorPalette.appendChild(colorDiv);

    const currentColor = paletteColors[index];
    colorDiv.style.backgroundColor = currentColor;
  }
}

function setPixelsRow() {
  for (let indexColumn = 1; indexColumn <= boardSize; indexColumn += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);

    if (indexColumn % boardSize === 0) {
      const brElement = document.createElement('br');
      console.log(brElement);
      pixelBoard.appendChild(brElement);
    }
  }
}
function setPixels() {
  for (let index = 1; index <= boardSize; index += 1) {
    setPixelsRow();
  }
}

function changeSelection(e) {
  const colorDivs = document.querySelectorAll('.color');
  const clickedColor = e.target.style.backgroundColor;
  selectedColor = paletteColors.findIndex((num) => num === clickedColor);
  for (let index = 0; index < colorDivs.length; index += 1) {
    colorDivs[index].className = 'color';
  }

  colorDivs[selectedColor].classList.add('selected');
}

function colorPixel(e) {
  if (e.target.className === 'pixel') {
    e.target.style.backgroundColor = paletteColors[selectedColor];
  }
}

function clearBoard() {
  const pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

setPaletteColors();
setPixels();

// Event Listeners
colorPalette.addEventListener('click', changeSelection);
pixelBoard.addEventListener('click', colorPixel);
clearBtn.addEventListener('click', clearBoard);
