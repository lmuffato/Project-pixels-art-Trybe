document.getElementById('black').style.backgroundColor = 'black';
document.querySelector('#blue').style.backgroundColor = 'blue';
document.querySelector('#green').style.backgroundColor = 'green';
document.querySelector('#red').style.backgroundColor = 'red';

const pixelBoard = document.getElementById('pixel-board');

const colors = document.getElementsByClassName('color');

const pixel = document.getElementsByClassName('pixel');

const pixelBoardSize = 5;

const pixelLines = document.getElementsByClassName('pixel-line');

const clearBtn = document.querySelector('button');
clearBtn.setAttribute('id', 'clear-board');
clearBtn.innerText = 'Limpar';

const inputBox = document.querySelector('#board-size');

const vqvBtn = document.getElementById('generate-board');
vqvBtn.innerHTML = 'VQV';

function boardSizeCorrector(boardSize) {
  if (boardSize < 5) {
    return 5;
  }
  if (boardSize > 50) {
    return 50;
  }
  return boardSize;
}

function toPaint(e) {
  const selectedColor = document.querySelector('.selected');
  e.target.style.backgroundColor = selectedColor.style.backgroundColor;
}

function pixelBoardCreation(boardSize) {
  const newBoardSize = boardSizeCorrector(boardSize);

  for (let indexLine = 0; indexLine < newBoardSize; indexLine += 1) {
    const line = document.createElement('tr');
    line.className = 'pixel-line';
    pixelBoard.appendChild(line);
    for (let indexColumn = 0; indexColumn < newBoardSize; indexColumn += 1) {
      const column = document.createElement('th');
      column.className = 'pixel';
      column.addEventListener('click', toPaint);
      const pixelBoardLine = pixelLines[indexLine];
      pixelBoardLine.appendChild(column);
    }
  }
}
pixelBoardCreation(pixelBoardSize);

function deleteSelectedClass() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}

function setColor(e) {
  deleteSelectedClass();
  e.target.className += ' selected';
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].addEventListener('click', setColor);
}

function clear() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}
clearBtn.addEventListener('click', clear);

function deletePixelBoard() {
  for (let index = 0; index < pixelLines.length; index += 1) {
    pixelBoard.removeChild(pixelBoard.firstElementChild);
  }
}

function createPixelBoard() {
  if (inputBox.value === '') {
    alert('Board inválido!');
  } else {
    for (let index = 0; index < 10; index += 1) {
      deletePixelBoard();
    }
    pixelBoardCreation(inputBox.value);
  }
}

vqvBtn.addEventListener('click', createPixelBoard);
