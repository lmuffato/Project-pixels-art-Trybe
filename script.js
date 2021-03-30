const pixelLine = document.getElementById('pixel-board');

function createPixelBoard() {
  for (let index = 0; index < 5; index += 1) {
    const pixel = document.createElement('tr');
    pixelLine.appendChild(pixel);
  }

  for (let indexLine = 0; indexLine < 5; indexLine += 1) {
    let indexColumn = 0;
    for (indexColumn; indexColumn < 5; indexColumn += 1) {
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
eventClearBoard();

createPixelBoard();
paintPixel();

// Requisito 10
function deleteCurrentBoard() {
  while (currentBoard.firstChild) {
    currentBoard.removeChild(currentBoard.firstChild);
  }
}

const inputValue = document.getElementById('board-size');

function createNewPixelBoard() {
  deleteCurrentBoard();

  for (let index = 0; index < inputValue.value; index += 1) {
    const pixel = document.createElement('tr');
    pixelLine.appendChild(pixel);
  }

  for (let indexLine = 0; indexLine < inputValue.value; indexLine += 1) {
    let indexColumn = 0;
    for (indexColumn; indexColumn < inputValue.value; indexColumn += 1) {
      const pixel = document.createElement('td');
      pixelLine.children[indexColumn].appendChild(pixel).className = 'pixel';
    }
  }
}

function addNewPixelBoard() {
  const x = document.getElementById('generate-board');
  x.addEventListener('click', createNewPixelBoard);
}

addNewPixelBoard();
