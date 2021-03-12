// Gera cores aleatórias

function randomColors() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
}
function distributeRandomColors() {
  document.getElementById('green').style.backgroundColor = randomColors();
  document.getElementById('magenta').style.backgroundColor = randomColors();
  document.getElementById('blue').style.backgroundColor = randomColors();
}

window.onload = function initialize() {
  distributeRandomColors();
};

// Atribui a cor preta à primeira cor da paleta

function colorizePalette() {
  const colorOne = document.getElementById('black');
  colorOne.style.backgroundColor = 'black';
}
colorizePalette();
const colorPixel = document.getElementsByClassName('pixel');
function colorizePixelBoard() {
  for (let key = 0; key < colorPixel.length; key += 1) {
    colorPixel[key].style.backgroundColor = 'white';
  }
}
colorizePixelBoard();

function clearPixelColor() {
  for (let key = 0; key < colorPixel.length; key += 1) {
    if (colorPixel[key].style.backgroundColor !== 'white') {
      colorPixel[key].style.backgroundColor = 'white';
      console.log('limpa');
    }
  }
}
const clearBtn = document.getElementById('clear-board');
clearBtn.addEventListener('click', clearPixelColor, false);

const colorBlack = document.getElementsByClassName('color')[0];
const colorTwo = document.getElementsByClassName('color')[1];
const colorThree = document.getElementsByClassName('color')[2];
const colorFour = document.getElementsByClassName('color')[3];

function colorTwoSelected() {
  if (colorTwo.classList.contains('selected')) {
    colorBlack.classList.remove('selected');
    colorThree.classList.remove('selected');
    colorFour.classList.remove('selected');
  }
}
function colorThreeSelected() {
  if (colorThree.classList.contains('selected')) {
    colorBlack.classList.remove('selected');
    colorTwo.classList.remove('selected');
    colorFour.classList.remove('selected');
  }
}

function colorFourSelected() {
  if (colorFour.classList.contains('selected')) {
    colorBlack.classList.remove('selected');
    colorTwo.classList.remove('selected');
    colorThree.classList.remove('selected');
  }
}

function colorBlackSelected() {
  if (colorBlack.classList.contains('selected')) {
    colorTwo.classList.remove('selected');
    colorThree.classList.remove('selected');
    colorFour.classList.remove('selected');
  }
}

function colorTwoSelection() {
  colorTwo.classList.add('selected');
  colorTwoSelected();
}
colorTwo.addEventListener('click', colorTwoSelection);

function colorThreeSelection() {
  colorThree.classList.add('selected');
  colorThreeSelected();
}
colorThree.addEventListener('click', colorThreeSelection);

function colorFourSelection() {
  colorFour.classList.add('selected');
  colorFourSelected();
}
colorFour.addEventListener('click', colorFourSelection);

function colorBlackSelection() {
  colorBlack.classList.add('selected');
  colorBlackSelected();
}
colorBlack.addEventListener('click', colorBlackSelection);
// Referência usada para a função randomColors:
// https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
