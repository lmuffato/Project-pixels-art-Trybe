const tableBoard = document.querySelector('#pixel-board');
const inputNumberSize = document.querySelector('#board-size');
const valueGenerator = document.querySelector('#generate-board');
const colorList = document.querySelectorAll('.color');

function colorPanel() {
  for (let index = 0; index < 4; index += 1) {
    colorList[0].style.backgroundColor = 'black';
    colorList[0].classList.add('selected');
    colorList[1].style.backgroundColor = 'yellow';
    colorList[2].style.backgroundColor = 'red';
    colorList[3].style.backgroundColor = 'green';
  }
}
colorPanel();

function oldTable(){
  tableBoard.style.width = '215px';
  for (let index = 1; index <= 25; index += 1) {
    const cell = document.createElement('div');
    cell.className = 'pixel';
    tableBoard.appendChild(cell);
    }
}
oldTable();


function generateSizeValue() {
  valueGenerator.addEventListener('click', () => {
    if(inputNumberSize.value === '') {
      alert('Board inválido')
    }
    resetTable();
   createTableSize();
  });
}
generateSizeValue();


function createTableSize() {
const numberSizeValue = inputNumberSize.value;
const numberOfPixels = parseInt(numberSizeValue) * parseInt(numberSizeValue);
const tableWidth = 43 * parseInt(numberSizeValue);
tableBoard.style.width = `${tableWidth}px`;
for (let index = 1; index <= numberOfPixels; index += 1) {
  const cell = document.createElement('div');
  cell.className = 'pixel';
  tableBoard.appendChild(cell);
  }
}

function resetTable() {
  const resetPixels = document.querySelectorAll('.pixel');
  for(let index = 0; index < resetPixels.length; index += 1) {
    resetPixels[index].parentElement.removeChild(resetPixels[index]);
  }
}

function getPanelColors() {
  const colors = document.getElementById('color-palette');
  colors.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });
}
getPanelColors();

function setPanelColors() {
  const tbl = document.getElementById('pixel-board');
  tbl.addEventListener('click', (event) => {
    const color = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = color;
  });
}
setPanelColors();

function clearBoard() {
  const whiteBoard = document.getElementById('clear-board');
  whiteBoard.addEventListener('click', () => {
    const pixelWhite = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelWhite.length; index += 1) {
      pixelWhite[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();



