const pixelLine = document.getElementById('pixel-board');

function createPixelBoard(size) {
  for (let index = 0; index < size; index += 1) {
    const pixel = document.createElement('tr');
    pixelLine.appendChild(pixel);
  }

  for (let indexLine = 0; indexLine < size; indexLine += 1) {
    let indexColumn = 0;
    for (indexColumn; indexColumn < size; indexColumn += 1) {
      const pixel = document.createElement('td');
      pixelLine.children[indexColumn].appendChild(pixel).className = 'pixel';
    }
  }
}

// Requisito 7
const colors = document.getElementsByClassName('color');

function changeSelectedColor(targetColor) {
  for (let index = 0; index < colors.length; index += 1) {
    const element = colors[index];
    const event = targetColor.target;

    if (event === element) {
      event.classList.add('selected');
    } else {
      element.classList.remove('selected');
    }
  }
}

function selectColor() {
  for (let index = 0; index < colors.length; index += 1) {
    const element = colors[index];

    element.addEventListener('click', changeSelectedColor);
  }
}

selectColor();

// Requisito 8
function getSelectedColor() {
  let selectedColor;

  for (let index = 0; index < colors.length; index += 1) {
    const element = colors[index];

    if (element.classList.contains('selected')) {
      selectedColor = element.getAttribute('background-color');
    }
  }
  return selectedColor;
}

const pixels = document.getElementsByClassName('pixel');

function changePixelColor(targetColor) {
  const currentColor = getSelectedColor();

  for (let index = 0; index < pixels.length; index += 1) {
    const elementPixel = pixels[index];

    if (targetColor.target === elementPixel) {
      elementPixel.style.backgroundColor = currentColor;
    }
  }
}

function paintPixel() {
  for (let index = 0; index < pixels.length; index += 1) {
    const elementPixel = pixels[index];

    elementPixel.addEventListener('click', changePixelColor);
  }
}

// Requisito 9
const currentBoard = document.getElementById('pixel-board');

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    const elementPixelBoard = pixels[index];

    elementPixelBoard.style.backgroundColor = 'white';
  }
}

function eventClearBoard() {
  document.getElementById('clear-board').addEventListener('click', clearBoard);
}

while (currentBoard.firstChild) {
  currentBoard.removeChild(currentBoard.firstChild);
}

// Requisito 10
// function deleteCurrentPixelBoard() {
//   while (pixelLine.firstChild) {
//     pixelLine.removeChild(pixelLine.firstChild);
//   }
// }

const input = document.getElementById('board-size');
const buttonReSize = document.getElementById('generate-board');

function checkBoardSize() {
  if (input.value === '') {
    alert('Board inválido!');
    input.value = 5;
  } else if (input.value < 5) {
    input.value = 5;
  } else if (input.value > 50) {
    input.value = 50;
  }
  currentBoard.innerHTML = '';
  createPixelBoard(input.value);
}

function addBoardReSize() {
  buttonReSize.addEventListener('click', checkBoardSize);
}

// Requisito 12
// https://gist.github.com/girol/4a606d5cc6286ce1e9755faa3b7746df
// Endereço web do código que gera cor em hexadecimal
function geraCor() {
  const hexadecimais = '0123456789ABCDEF';
  let cor = '#';

  for (let index = 0; index < 6; index += 1) {
    cor += hexadecimais[Math.floor(Math.random() * 16)];
  }
  return cor;
}

const bkColor = 'background-color';
document.getElementById('second-color').setAttribute(bkColor, geraCor());
document.getElementById('third-color').setAttribute(bkColor, geraCor());
document.getElementById('fourth-color').setAttribute(bkColor, geraCor());

window.onload = function pixelsArt() {
  createPixelBoard(5);
  paintPixel();
  eventClearBoard();
  addBoardReSize();
};
