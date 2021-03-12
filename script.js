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

// Referência usada para a função randomColors:
// https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
