window.onload = document.querySelector('.color').classList.add('selected');

const black = document.getElementsByClassName('color')[0];
const blue = document.getElementsByClassName('color')[1];
const red = document.getElementsByClassName('color')[2];
const green = document.getElementsByClassName('color')[3];

function blackSelected() {
  black.className = 'color selected';
  blue.className = 'color';
  red.className = 'color';
  green.className = 'color';
}

black.addEventListener('click', blackSelected);

function blueSelected() {
  black.className = 'color';
  blue.className = 'color selected';
  red.className = 'color';
  green.className = 'color';
}

blue.addEventListener('click', blueSelected);

function redSelected() {
  black.className = 'color';
  blue.className = 'color';
  red.className = 'color selected';
  green.className = 'color';
}
red.addEventListener('click', redSelected);

function greenSelected() {
  black.className = 'color';
  blue.className = 'color';
  red.className = 'color';
  green.className = 'color selected';
}

green.addEventListener('click', greenSelected);

const pixels = document.getElementsByClassName('pixel');

const container = document.getElementById('pixel-board');

function paintPixel(event) {
  const alvo = event.target;
  const styleAlvo = window.getComputedStyle(alvo);
  const colorAlvo = styleAlvo.getPropertyValue('background-color');
  alvo.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

container.addEventListener('click', paintPixel);

const buttom = document.getElementById('clear-board');

function clearPixels() {
  for (let seletor = 0; seletor < pixels.length; seletor += 1) {
    pixels[seletor].style.backgroundColor = 'green';
  }
}

buttom.addEventListener('click', clearPixels);
