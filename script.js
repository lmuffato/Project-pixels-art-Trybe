const colorActive = document.getElementById('color-active');
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const buttonGenerateBoard = document.getElementById('generate-board');
const buttonClearBoard = document.getElementById('clear-board');
let color = 'black';

function removeSelected() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
}

function removeAnimationPixel() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.animation = '';
  }
}

function addAnimationPixel() {
  removeAnimationPixel();
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.animation = 'palette-color 1s';
  }
  setTimeout(removeAnimationPixel, 1000);
}

function selectedColor(event) {
  const paletteElement = event.currentTarget;
  color = window.getComputedStyle(paletteElement).getPropertyValue('background-color');
  removeSelected();
  removeAnimationPixel();
  paletteElement.className += ' selected';
  colorActive.style.backgroundColor = color;
}

function addListenerPaletteColors() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', selectedColor);
  }
}

function fillPixel(event) {
  const pixelElement = event.currentTarget;
  pixelElement.style.backgroundColor = color;
  pixelElement.style.animation = 'palette-color 1s';
}

function addListenerPixel() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', fillPixel);
  }
}

function clearBoard() {
  addAnimationPixel();
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function checkBoardSizeEmpty(boardSize) {
  if (boardSize === '' || boardSize < 0) {
    alert('Board inválido!');
    return true;
  }
  return false;
}

function checkBoardSizeLimit(boardSize) {
  if (boardSize < 5) {
    return 5;
  } if (boardSize > 50) {
    return 50;
  }
  return boardSize;
}

function changeSizeBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  const boardSize = document.getElementById('board-size');
  if (checkBoardSizeEmpty(boardSize.value) !== false) {
    return false;
  }
  pixelBoard.innerHTML = '';
  boardSize.value = checkBoardSizeLimit(boardSize.value);
  for (let i = 0; i < boardSize.value; i += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
    for (let j = 0; j < boardSize.value; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      line.appendChild(pixel);
    }
  }
  addListenerPixel();
}

window.onload = function init() {
  addListenerPaletteColors();
  addListenerPixel();
  buttonClearBoard.addEventListener('click', clearBoard);
  buttonGenerateBoard.addEventListener('click', changeSizeBoard);
};
