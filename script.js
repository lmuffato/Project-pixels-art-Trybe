const numberOfLines = 5;
const numberOfColumns = 5;
const paletteColor = document.querySelectorAll('.color');
const blackPalette = document.getElementById('color-1');
const btnClear = document.getElementById('clear-board');
const btnSize = document.getElementById('generate-board');
blackPalette.style.backgroundColor = 'black';

function generateRandomRGB() {
  const r = Math.floor(Math.random() * (255));
  const g = Math.floor(Math.random() * (255));
  const b = Math.floor(Math.random() * (255));
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
}

function eventClickPixel() {
  document.querySelectorAll('.pixel').forEach((element) => {
    element.addEventListener('click', (elementTarget) => {
      const pixelElement = elementTarget.target;
      const colorPalette = document.getElementsByClassName('selected')[0].style.backgroundColor;
      pixelElement.style.backgroundColor = colorPalette;
    });
  });
}

function generateColorPalette(palletColorNumber) {
  for (let index = 1; index < palletColorNumber; index += 1) {
    const palletElement = document.getElementsByClassName('color');
    palletElement[index].style.backgroundColor = generateRandomRGB();
  }
}

function createPixel(numberOfColumnsCP, divElementLine) {
  for (let index = 0; index < numberOfColumnsCP; index += 1) {
    const divElementPixel = document.createElement('div');
    divElementPixel.className = 'pixel';

    divElementLine.appendChild(divElementPixel);
  }
}

function createBoard(numberOfLinesCB, numberOfColumnsCB) {
  for (let index = 0; index < numberOfLinesCB; index += 1) {
    const divElementLine = document.createElement('div');
    divElementLine.className = 'pixel-line';

    createPixel(numberOfColumnsCB, divElementLine);

    document.getElementById('pixel-board').appendChild(divElementLine);
  }
}

createBoard(numberOfLines, numberOfColumns);

paletteColor.forEach((element) => {
  element.addEventListener('click', (elementTarget) => {
    const pixelElement = elementTarget;
    const pixel = document.getElementsByClassName('color');

    for (let index = 0; index < pixel.length; index += 1) {
      if (pixel[index].className === 'color selected') {
        pixel[index].className = 'color';
      }
    }
    pixelElement.target.className += ' selected';
  });
});

btnClear.addEventListener('click', () => {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

btnSize.addEventListener('click', () => {
  const pixelBoard = document.getElementById('pixel-board');
  const inputNumber = document.getElementById('board-size');
  let inputNumberValue = inputNumber.value;
  pixelBoard.innerHTML = '';

  if (inputNumberValue === '') window.alert('Board inválido!');

  if (inputNumberValue < 5) inputNumberValue = 5;
  else if (inputNumberValue > 50) inputNumberValue = 50;

  createBoard(inputNumberValue, inputNumberValue);
  eventClickPixel();
});

eventClickPixel();

generateColorPalette(4);

/*
REFERÊNCIAS UTILIZADAS:
https://www.w3schools.com/jsref/met_document_addeventlistener.asp
https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript?page=1&tab=votes#tab-top
https://stackoverflow.com/questions/19886843/how-to-remove-outline-border-from-input-button
https://stackoverflow.com/questions/23095637/how-do-you-get-random-rgb-in-javascript
https://stackoverflow.com/questions/60333963/elements-style-backgroundcolor-returns-undefined
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/Arrow_functions
https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/input
*/
