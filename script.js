document.querySelector('.black').style.backgroundColor = 'black';
document.querySelector('.red').style.backgroundColor = 'red';
document.querySelector('.blue').style.backgroundColor = 'blue';
document.querySelector('.green').style.backgroundColor = 'green';

const pixelBoard = document.querySelector('#pixel-board');
function createPixelBoard(size) {
  for (let line = 0; line < size; line += 1) {
    const tableRow = document.createElement('tr');
    pixelBoard.appendChild(tableRow);
    for (let column = 0; column < size; column += 1) {
      const tableCell = document.createElement('td');
      tableRow.appendChild(tableCell);
      tableCell.classList.add('pixel');
    }
  }
} createPixelBoard(5);

function clearBoard() {
  const buttonClear = document.querySelector('#clear-board');
  const pixelTd = document.getElementsByClassName('pixel');
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

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('color')) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  }
});

pixelBoard.addEventListener('click', function (event) {
  event.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
});
