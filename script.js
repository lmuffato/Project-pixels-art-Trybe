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

function clearPixelColor() {
  const elem = document.getElementsByClassName('pixel');
  const theCssprop = window.getComputedStyle(elem, null).getPropertyValue('background-color');
  document.getElementsByClassName('pixel').innerHTML = theCssprop;
  if (theCssprop !== 'white') {
    elem.style.backgroundColor = 'white';
  }
}
const clearBtn = document.getElementsByClassName('clear-board');
clearBtn[0].addEventListener('click', clearPixelColor, false);

// Referência usada para a função randomColors:
// https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
