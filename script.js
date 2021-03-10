const colorsArray = ['red', 'blue', 'green', 'magenta'];

const colorsInPalette = document.querySelectorAll('.color');

const resetBoardButton = document.querySelector('#clear-board');

const generateNewBoardButton = document.querySelector('#generate-board');

const boardSizeInput = document.querySelector('#board-size');

const pixelBoard = document.querySelector('#pixel-board');

function addColorsInPalette() {
  for (let index = 0; index < colorsInPalette.length; index += 1) {
    colorsInPalette[index].style.background = colorsArray[index];
  }

  colorsInPalette[0].style.background = 'black';
}

function createPixelInBoard() {
  const pixel = document.createElement('container');
  pixel.className = 'pixel';
  return pixel;
}

for (let index = 0; index < 25; index += 1) {
  pixelBoard.appendChild(createPixelInBoard());
}

let boardPixels = document.querySelectorAll('.pixel');

function selectNewElement(newEl) {
  colorsInPalette.forEach((el) => el.classList.remove('selected'));
  newEl.classList.toggle('selected');
}

function paintNewPixel(pixel) {
  const boardPixel = pixel;
  boardPixel.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

function resetPixelBoard() {
  boardPixels.forEach((px) => px.setAttribute('style', 'background-color: white;'));
}

function generateNewBoard() {
  const boardSizeValue = boardSizeInput.valueAsNumber;

  if (boardSizeValue === 0) {
    alert('Board inválido!');
  } else {
    boardPixels = document.querySelectorAll('.pixel');
    boardPixels.forEach((px) => px.remove());

    pixelBoard.style.gridTemplateColumns = `repeat(${boardSizeValue}, 40px)`;
    pixelBoard.style.gridTemplateRows = `repeat(${boardSizeValue}, 40px)`;

    for (let index = 0; index < boardSizeValue ** 2; index += 1) {
      document.querySelector('#pixel-board').appendChild(createPixelInBoard());
    }
  }
}

colorsInPalette.forEach(addColorsInPalette);
colorsInPalette.forEach((el) => el.addEventListener('click', (e) => selectNewElement(e.target)));
boardPixels.forEach((px) => px.addEventListener('click', (e) => paintNewPixel(e.target)));
resetBoardButton.addEventListener('click', resetPixelBoard);
generateNewBoardButton.addEventListener('click', generateNewBoard);
