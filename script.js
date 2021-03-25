const palette = document.querySelectorAll('.color');
const black = document.getElementsByClassName('color')[0];
const blue = document.getElementsByClassName('color')[1];
const red = document.getElementsByClassName('color')[2];
const green = document.getElementsByClassName('color')[3];
const createPixel = document.createElement('div');
const selected = 'color selected';
const pixelBoard = document.querySelector('#pixel-board');

function ramdomColor() {
  for (let index = 0; index < palette.length; index += 1) {
    const color1 = Math.floor(Math.random() * 255);
    const color2 = Math.floor(Math.random() * 255);
    const color3 = Math.floor(Math.random() * 255);
    const randomColors = `rgb(${color1},${color2},${color3})`;
    palette[index].style.backgroundColor = randomColors;
    document.querySelector('.color').classList.add('selected');
    document.querySelector('.color').style.backgroundColor = 'black';
  }
}

ramdomColor();

function generatePixels(userSize) {
  for (let index = 0; index < userSize.length; index += 1) {
    pixelBoard.appendChild(createPixel);
  }
}

generatePixels(5);

function blackSelected() {
  black.className = selected;
  blue.className = 'color';
  red.className = 'color';
  green.className = 'color';
}

black.addEventListener('click', blackSelected);

function blueSelected() {
  black.className = 'color';
  blue.className = selected;
  red.className = 'color';
  green.className = 'color';
}

blue.addEventListener('click', blueSelected);

function redSelected() {
  black.className = 'color';
  blue.className = 'color';
  red.className = selected;
  green.className = 'color';
}
red.addEventListener('click', redSelected);

function greenSelected() {
  black.className = 'color';
  blue.className = 'color';
  red.className = 'color';
  green.className = selected;
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
    pixels[seletor].style.backgroundColor = 'white';
  }
}

buttom.addEventListener('click', clearPixels);
