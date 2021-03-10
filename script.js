const colorPalette = document.querySelector('#color-palette');
function createPalette() {
  for (let index = 0; index < 4; index += 1) {
    const colorDiv = document.createElement('div');
    colorPalette.appendChild(colorDiv);
    if (index === 0) {
      colorDiv.classList.add('color', 'black');
    } else if (index === 1) {
      colorDiv.classList.add('color', 'red');
    } else if (index === 2) {
      colorDiv.classList.add('color', 'blue');
    } else if (index === 3) {
      colorDiv.classList.add('color', 'green');
    }
  }
} createPalette();

const pixelBoard = document.querySelector('#pixel-board');
function createPixelBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const tableRow = document.createElement('tr');
    pixelBoard.appendChild(tableRow);
    for (let index = 0; index < size; index += 1) {
      const tableCell = document.createElement('td');
      tableRow.appendChild(tableCell);
      tableCell.classList.add('pixel');
    }
  }
} createPixelBoard()

function createBoardDynamic() {
  let boardSize = 0;
  boardSize = document.querySelector('#board-size').value;
  if (boardSize === '') {
    alert('Board inválido!');
  }
  createPixelBoard(boardSize);
};

function clearBoard() {
  const buttonClear = document.querySelector('#clear-board');
  let pixelTd = document.getElementsByClassName('pixel');
  buttonClear.addEventListener('click', function () {
    for (let indexClear = 0; indexClear < pixelTd.length; indexClear += 1) {
      pixelTd[indexClear].style.backgroundColor = 'white';
    }
  });
} clearBoard();

const colorClassName = document.querySelectorAll('.color');
function colorSelected() {
  for (let index = 0; index < colorClassName.length; index += 1) {
    colorClassName[0].classList.add('selected');
  }
} colorSelected();

const blackColor = document.querySelector('.black');
const redColor = document.querySelector('.red');
const blueColor = document.querySelector('.blue');
const greenColor = document.querySelector('.green');
function paletteSelected() {
  colorPalette.addEventListener('click', function (event) {
    if (event.target.classList.contains('red')) {
      event.target.classList.add('selected');
      blackColor.classList.remove('selected');
      blueColor.classList.remove('selected');
      greenColor.classList.remove('selected');
    } else if (event.target.classList.contains('blue')) {
      event.target.classList.add('selected');
      blackColor.classList.remove('selected');
      redColor.classList.remove('selected');
      greenColor.classList.remove('selected');
    } else if (event.target.classList.contains('green')) {
      event.target.classList.add('selected');
      blackColor.classList.remove('selected');
      redColor.classList.remove('selected');
      blueColor.classList.remove('selected');
    } else if (event.target.classList.contains('black')) {
      event.target.classList.add('selected');
      greenColor.classList.remove('selected');
      redColor.classList.remove('selected');
      blueColor.classList.remove('selected');
    }
  });
} paletteSelected();

function paintPixel() {
  const tableBoard = document.querySelector('#pixel-board');
  tableBoard.addEventListener('click', function (event) {
    if (blackColor.classList.contains('selected')) {
      event.target.style.backgroundColor = 'black';
    } if (redColor.classList.contains('selected')) {
      event.target.style.backgroundColor = 'red';
    } if (blueColor.classList.contains('selected')) {
      event.target.style.backgroundColor = 'blue';
    } if (greenColor.classList.contains('selected')) {
      event.target.style.backgroundColor = 'green';
    }
  });
} paintPixel();


