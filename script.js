const colorFirst = document.querySelector('.first');
const colorSecond = document.querySelector('.second');
const colorThird = document.querySelector('.third');
const colorFourth = document.querySelector('.fourth');



/* Randomizador de cores estudado e reproduzido daqui: https://stackoverflow.com/questions/1484506/random-color-generator  */

function randomizeColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function injectColors() {
  colorFirst.style.backgroundColor = 'black';
  colorSecond.style.backgroundColor = randomizeColor();
  colorThird.style.backgroundColor = randomizeColor();
  colorFourth.style.backgroundColor = randomizeColor();
}

injectColors();

function createPixelBoard() {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let i = 1; i <= 5; i += 1) {
    const pixelBoardColumn = document.createElement('tr');
    pixelBoardColumn.className = 'line';

    pixelBoard.appendChild(pixelBoardColumn);

    for (let j = 1; j <= 5; j += 1) {
      const pixelBoardLine = document.createElement('td');
      pixelBoardLine.className = 'pixel';

      pixelBoardColumn.appendChild(pixelBoardLine);
    }
  }
}

createPixelBoard();