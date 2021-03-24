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
const userBoard = document.querySelector('#generate-board');
userBoard.addEventListener('click', function () {
  const inputSize = document.querySelector('#board-size').value;
  document.querySelector('#board-size').value = '';  
  createNewboard(inputSize);

function createNewboard(inputSize){
  if (inputSize === ''){
    alert('Board inválido!');
  } else if (inputSize < 5){
    inputSize = 5;
  } else if(inputSize < 50){
    inputSize = 50;
  }
}
generateTableBoard(inputSize);
});
const tableBoard = document.querySelector('#pixel-board');
function generateTableBoard(number) {
  for (let index = 0; index < number; index += 1) {
    const row = document.createElement('tr');
    for (let data = 0; data < number; data += 1) {
      const cell = document.createElement('td');
      cell.className = 'pixel';
      row.appendChild(cell);
    }
    tableBoard.appendChild(row);
  }
}
generateTableBoard();

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


window.onload = () => {
  colorPanel();
  getPanelColors();
  setPanelColors();
  clearBoard();
};
