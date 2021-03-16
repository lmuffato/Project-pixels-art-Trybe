const colors = document.querySelectorAll('.color');
const board = document.querySelector('#pixel-board');

colors[0].style.backgroundColor = 'black';
colors[1].style.backgroundColor = 'red';
colors[2].style.backgroundColor = 'green';
colors[3].style.backgroundColor = 'blue';

function boardSize(number) {
  for (let i = 0; i < number; i += 1) {
    for (let j = 0; j < number; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      board.appendChild(pixel);
    }
  }
}

document.querySelector('#color-palette').addEventListener('click', (newSelected) => {
  const oldSelected = document.querySelector('.selected');
  oldSelected.classList.remove('selected');
  newSelected.target.classList.add('selected');
});

board.addEventListener('click', (paint) => {
  const color = document.querySelector('.selected').style.backgroundColor;
  const targeted = paint.target;
  targeted.style.backgroundColor = color;
});

function clearBoard() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].style.backgroundColor = 'white';
  }
}

document.querySelector('#generate-board').addEventListener('click', () => {
  board.innerText = '';
  const size = document.querySelector('#board-size');
  if (size.value === '') {
    alert('Board inválido!');
  } if (size.value < 5) {
    size.value = 5;
  } if (size.value > 50) {
    size.value = 50;
  }
  const calculation = 2.625 * size.value;
  board.style.height = `${calculation}em`;
  board.style.width = `${calculation}em`;
  boardSize(size.value);
  clearBoard();
});

boardSize(5);
document.querySelector('#clear-board').addEventListener('click', clearBoard);
