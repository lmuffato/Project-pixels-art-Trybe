function generateRandomColors() {
  const num = 4;
  for (let index = 0; index < num; index += 1) {
    const palette = document.querySelector('#color-palette');
    const colorDiv = document.createElement('div');
    colorDiv.className = 'color';

    if (index === 0) {
      colorDiv.style.backgroundColor = 'black';
      colorDiv.classList.add('selected');
    } else {
      // eslint-disable-next-line max-len
      colorDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)} , ${Math.floor(Math.random() * 256)})`;
    }
    palette.appendChild(colorDiv);
  }
}

generateRandomColors();

function paintPixel(event) {
  const colorSelected = document.querySelector('.selected');
  const eventColor = event.target;
  eventColor.style.backgroundColor = colorSelected.style.backgroundColor;
}

function board(pixels) {
  const boardPixel = document.createElement('div');
  const body = document.querySelector('main');
  boardPixel.id = 'pixel-board';
  boardPixel.style.width = `${pixels}px`;
  boardPixel.style.height = `${pixels}px`;
  body.appendChild(boardPixel);
  boardPixel.addEventListener('click', paintPixel);
}

board('50px');

function createPixels(num) {
  for (let index = 0; index < num; index += 1) {
    const square = document.createElement('div');
    square.className = 'pixel';
    square.style.backgroundColor = 'white';
    const numBoard = document.querySelector('#pixel-board');
    numBoard.appendChild(square);
  }
}

createPixels(25);

function clearPixel() {
  const selectPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < selectPixel.length; index += 1) {
    selectPixel[index].style.backgroundColor = 'white';
  }
}

const clearBoard = document.querySelector('#clear-board');
clearBoard.addEventListener('click', clearPixel);
