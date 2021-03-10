function getSelectedColor(event) {
  const pixel = event.target;
  if (pixel.className.includes('pixel')) {
    const color = document.querySelector('.selected');
    pixel.style.backgroundColor = color.style.backgroundColor;
  }
}

function selectColor(event) {
  const selectedColor = event.target;
  if (selectedColor.className.includes('color')) {
    document.querySelector('.selected').className = 'boxes color';
    selectedColor.className += ' selected';
  }
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
    if (color === array[index] || color === '') {
      return false;
    }
  }
  return true;
}
// https://stackoverflow.com/posts/23095771/revisions
function generateRandomColor() {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(1, 254);
  const g = randomBetween(1, 254);
  const b = randomBetween(1, 254);
  const rgb = `rgb(${r},${g},${b})`;

  return rgb;
}

function randomColors() {
  const colors = ['black'];

  while (colors.length < 4) {
    const color = generateRandomColor();
    if (colorTest(colors, color) === true) {
      colors.push(color);
    }
  }
  return colors;
}

function setColumns(line, size) {
  
  for (let index = 0; index < size; index += 1) {
    let box = document.createElement('th');
    box.className = 'boxes pixel';
    line.appendChild(box);
  }
  return line;
}

function setLines(size) {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < size; index += 1) {
    let line = document.createElement('tr');
    line = setColumns(line, size);
    pixelBoard.appendChild(line);
  }
}

function setBoard(size) {
  setLines(size);
}

// function getSize(){
//   let boardSize = document.getElementById('board-size');
//   return parseInt(boardSize.value);
// }

// function reSize() {
//   setBoard(getSize);
// }

// function setSize(){
//   const button = document.getElementById('vqv-button');
//   button.addEventListener('click', reSize);
// }

window.onload = function script() {
  setColor(randomColors());
  pixelPaint();
  clear();
  setBoard(5);
};
