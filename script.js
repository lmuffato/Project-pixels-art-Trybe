window.onload = document.querySelector('.color').classList.add('selected');

const selectedColor = document.getElementsByClassName('selected').style.backgroundColor;

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

// for (let index = 0; index < pixels.length; index += 1) {
  // pixels[index].addEventListener('click', function(){
  // pixels[index] = selectedColor
  // });
// }
