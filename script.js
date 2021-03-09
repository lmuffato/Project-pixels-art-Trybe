let color = '#000';

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

function fillBoard(size) {
  const board = document.getElementById('pixel-board');
  const boardArea = size ** 2;

  for (let rows = 1; rows <= boardArea; rows += 1) {
    board.appendChild(createPixel());
  }

  board.style.gridTemplateColumns = `repeat(${size}, auto)`;
}

function generateBoard(size) {
  const board = document.createElement('div');
  board.id = 'pixel-board';
  fillBoard(size);
  document.body.appendChild(board);
}

function removeBoard() {
  const board = document.getElementById('pixel-board');
  if (board) {
    document.body.removeChild(board);
  }
}

function newBoard() {
  const size = document.getElementById('board-size').value;
  if (size >= 5 && size <= 50) {
    removeBoard();
    generateBoard(size);
  } else {
    alert('Board inválido!');
  }
}

document.getElementById('generate-board').addEventListener('click', newBoard);

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
}

document.getElementById('clear-board').addEventListener('click', clearBoard);

window.onload = () => {
  fillColorPalette();
  generateBoard(5);
};
