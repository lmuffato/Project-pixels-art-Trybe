const colorActive = document.getElementById('color-active');
const colors = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
let color = 'black';

function removeSelected() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
}

function removeAnimationPixel() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.animation = '';
  }
}

function selectedColor(event) {
  const paletteElement = event.currentTarget;
  color = window.getComputedStyle(paletteElement).getPropertyValue('background-color');
  removeSelected();
  removeAnimationPixel();
  paletteElement.className += ' selected';
  colorActive.style.backgroundColor = color;
}

function addListenerPaletteColors() {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', selectedColor);
  }
}

function fillPixel(event) {
  const pixelElement = event.currentTarget;
  pixelElement.style.backgroundColor = color;
  pixelElement.style.animation = 'palette-color 1s';
}

function addListenerPixel() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', fillPixel);
  }
}

window.onload = function init() {
  addListenerPaletteColors();
  addListenerPixel();
};
