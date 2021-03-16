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
  let buttonContainer = document.getElementById('buttonDiv');
  let newButton = document.createElement('button');
  let newButtonID = buttonId;

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

/* function generatePixels() {
  for (let index = 0; index < boardSize ** 2; index += 1) {
    const createPixel = document.createElement('div');
    createPixel.className = 'pixel';
    pixelsContainer.style.width = ((size * 41) + 'px');
    //pixelsContainer.style.height = boardSize * 41;
    pixelsContainer.appendChild(createPixel);
  }
} */

function wrongParam(value) {
  if (value < 5) {
    value = 5;
  } if (value > 50) {
    value = 50;
  } if (value === '') {
    return alert('Board inválido!');
  }
}

function createBoard() {
  wrongParam(boardSize);
  createPixelBoard(boardSize);
}

document.getElementById('generate-board').addEventListener('click', createBoard);
