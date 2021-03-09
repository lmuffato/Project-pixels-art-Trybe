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
function createPixelBoard() {
  for (let index = 0; index < 5; index += 1) {
    const tableRow = document.createElement('tr');
    pixelBoard.appendChild(tableRow);
    for (let index = 0; index < 5; index += 1) {
      const tableCell = document.createElement('td');
      tableRow.appendChild(tableCell);
      tableCell.classList.add('pixel');
    }
  }
} createPixelBoard();

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
