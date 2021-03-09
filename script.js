function getSelectedColor(event) {
  const pixel = event.target;
  if (pixel.className.includes('pixel')) {
    const color = document.querySelector('.selected');
    pixel.style.backgroundColor = color.style.backgroundColor;
  }
}

function selectColor(event) {
  const selectedColor = event.target;
  document.querySelector('.selected').className = 'boxes color';
  selectedColor.className += ' selected';
}

function pixelPaint() {
  const colorSelect = document.querySelector('#color-palette');
  const pixelBoard = document.querySelector('#pixel-board');
  colorSelect.addEventListener('click', selectColor);
  pixelBoard.addEventListener('click', getSelectedColor);
}

function setColor(colorsArray) {
  const boxColors = document.querySelectorAll('.color');
  const colors = colorsArray;

  for (let index = 0; index < boxColors.length; index += 1) {
    boxColors[index].style.backgroundColor = colors[index];
  }
}

function clearPainel() {
  const painel = document.querySelectorAll('.pixel');

  for (let index = 0; index < painel.length; index += 1) {
    painel[index].style.backgroundColor = 'white';
  }
}

function clear() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', clearPainel);
}

function colorTest(array, color) {
  for (let index = 0; index < array.length; index += 1) {
    if (color === array[index]) {
      return false;
    }
  }
  return true;
}

function randomColors() {
  const colorOptions = ['red', 'blue', 'orange', 'brown', 'green', 'yellow', 'pink', 'cyan'];
  const colors = ['black'];

  while (colors.length < 4) {
    const color = colorOptions[Math.floor(Math.random() * 8)];
    if (colorTest(colors, color) === true) {
      colors.push(color);
    }
  }
  return colors;
}

window.onload = function script() {
  setColor(randomColors());
  pixelPaint();
  clear();
};
