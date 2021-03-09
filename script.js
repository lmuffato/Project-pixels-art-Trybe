let color = 'fff';

function setColor(colorName) {
  if (colorName) {
    color = colorName;
  }
}

function selectColor(Event) {
  const newColor = Event.target;
  const isSelected = newColor.className.includes('selected');

  if (!isSelected) {
    const selectedColor = document.querySelector('.selected');
    // referencia sobre classList https://www.w3schools.com/howto/howto_js_remove_class.asp
    selectedColor.classList.remove('selected');
    newColor.classList.add('selected');
  }
  setColor(newColor.style.backgroundColor);
}

function createColorCell(colorName) {
  const colorCell = document.createElement('li');

  colorCell.style.backgroundColor = colorName;
  colorCell.style.color = colorName;
  colorCell.style.border = '1px solid black';
  colorCell.addEventListener('click', selectColor);

  if (colorName === 'black') {
    colorCell.classList.add('color', 'selected');
  } else {
    colorCell.classList.add('color');
  }

  return colorCell;
}

function fillColorPalette() {
  const colors = ['black', 'red', 'yellow', 'blue'];

  for (let colorUnit = 0; colorUnit < colors.length; colorUnit += 1) {
    const colorPallet = document.getElementById('color-palette');
    colorPallet.appendChild(createColorCell(colors[colorUnit]));
  }
}

function paintPixel(Event) {
  const pixel = Event.target;
  pixel.style.backgroundColor = color;
}

function createPixel() {
  const pixel = document.createElement('div');
  pixel.className = 'pixel';
  pixel.addEventListener('click', paintPixel);

  return pixel;
}

function createPixelRow() {
  const pixelRow = document.createElement('div');
  pixelRow.className = 'pixel-row';
  for (let cells = 1; cells <= 5; cells += 1) {
    pixelRow.appendChild(createPixel());
  }

  return pixelRow;
}

function fillPixelBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let rows = 1; rows <= 5; rows += 1) {
    pixelBoard.appendChild(createPixelRow());
  }
}

window.onload = () => {
  fillColorPalette();
  fillPixelBoard();
};
