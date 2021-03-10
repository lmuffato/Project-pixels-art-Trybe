const colorPalette = document.getElementById('color-palette');
const pixelBoard = document.getElementById('pixel-board');
const clearBtn = document.getElementById('clear-board');
const paletteColors = ['black', 'blue', 'red', 'green'];
let selectedColor = 0;
const pixelColumns = 5;
const pixelRows = 5;

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

function setPixels() {
  for (let index = 1; index <= pixelColumns * pixelRows; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixelBoard.appendChild(pixel);
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

// Event Listeners
colorPalette.addEventListener('click', changeSelection);
pixelBoard.addEventListener('click', colorPixel);
clearBtn.addEventListener('click', clearBoard);

setPaletteColors();
setPixels();
