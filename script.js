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

const boardSize = document.getElementById('board-size').value;

function createBoard() {
  let boardSizeValue = boardSize;
  if (boardSizeValue < 5) {
    boardSizeValue = 5;
  } if (boardSizeValue > 50) {
    boardSizeValue = 50;
  } if (boardSizeValue === '') {
    return alert('Board inválido!');
  }
}

document.getElementById('generate-board').addEventListener('click', createBoard);