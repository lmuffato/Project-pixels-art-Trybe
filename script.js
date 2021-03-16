function createPixelBoard(size) {
  const pixelsContainer = document.querySelector('#pixel-board');
  document.getElementById('pixel-board').innerHTML = '';
  // let setWidth = window.getComputedStyle(pixelsContainer).getPropertyValue('width');
  // console.log(setWidth = (`${size * 41}px`);
  pixelsContainer.style.width = ((size * 41) + 'px');
  pixelsContainer.style.height = ((size * 41) + 'px');
  for (let index = 0; index < size ** 2; index += 1) {
    const createPixels = document.createElement('div');
    createPixels.className = 'pixel';
    pixelsContainer.appendChild(createPixels);
  }
}

createPixelBoard(5);

function classChange(event) {
  const paletteColors = document.querySelectorAll('.color');
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

document.querySelector('#color-palette').addEventListener('click', classChange);

// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle

function selectColor() {
  const getColorElement = document.querySelector('.selected');
  const selColor = window.getComputedStyle(getColorElement).getPropertyValue('background-color');
  return selColor;
}

function pixelsColor() {
  const pixels = document.getElementsByClassName('pixel');
  Array.from(pixels).forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      const pixelItem = event.target;
      pixelItem.style.backgroundColor = selectColor();
    });
  });
}
pixelsColor();

function createButton(buttonName, buttonId) {
  const buttonContainer = document.getElementById('buttonDiv');
  const newButton = document.createElement('button');
  const newButtonID = buttonId;

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
}

createButton('Limpar', 'clear-board');

function resetPixels() {
  const pixels = document.querySelectorAll('.pixel');
  Array.from(pixels).forEach((element) => {
    const pixel = element;
    pixel.style.backgroundColor = 'white';
  });
}

function clickButton() {
  const clearPixels = document.getElementById('clear-board');
  clearPixels.addEventListener('click', resetPixels);
}

clickButton();

// --- Dinamic Board Size ---

let boardSize = document.getElementById('board-size').value;

function wrongParam(value) {
  if (value < 5) {
    value = 5;
    console.log(value);
  } if (value > 50) {
    value = 50;
    console.log(value);
  } if (value === null) {
    alert('Board inválido!');
 }
}

wrongParam();

function createBoard() {
  wrongParam(boardSize);
  createPixelBoard(boardSize);
}

const vqvButton = document.getElementById('generate-board');
vqvButton.addEventListener('click', createBoard);

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const randomColor1 = `rgb(${r},${g},${b})`;
  const randomColor2 = `rgb(${g},${b},${r})`;
  const randomColor3 = `rgb(${b},${r},${g})`;
  const colorsBlock = document.querySelectorAll('.color');
  const randomColors = ['black', randomColor1, randomColor2, randomColor3];
  for (let index = 0; index < colorsBlock.length; index += 1) {
    const color = randomColors[index];
    colorsBlock[index].style.backgroundColor = color;
  }
}
randomColor();
