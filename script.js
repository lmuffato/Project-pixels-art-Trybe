const colorsObj = {
  black: 'black',
  red: 'red',
  blue: 'blue',
  green: 'green',
  selected: 'black',
};

function resetSelected() {
  const classSelecteds = document.getElementsByClassName('color');
  for (let index = 0; index < classSelecteds.length; index += 1) {
    classSelecteds[index].classList.remove('selected');
  }
}

function changeSelected(e) {
  return e.setAttribute('class', 'color selected');
}

// Req. 07
function changeColor(e) {
  colorsObj.selected = e.target.style.backgroundColor;
  resetSelected();
  changeSelected(e.target);
}

// Req. 01
function addColorsPalette(colors) {
  const colorPalette = document.getElementById('color-palette');

  Object.keys(colors).forEach((key) => {
    if (key !== 'selected') {
      const newColor = document.createElement('div');
      newColor.className = 'color';
      newColor.style.backgroundColor = key;
      newColor.addEventListener('click', changeColor);
      colorPalette.appendChild(newColor);
    }
  });
}

// Req. 04
function makePixelBoard(grid) {
  const pixels = {};
  const containerPixelBoard = document.getElementById('pixel-board');
  containerPixelBoard.style.width = 'fit-content';
  containerPixelBoard.style.display = 'grid';
  containerPixelBoard.style.gridTemplateColumns = `repeat(${grid}, 1fr)`;

  for (let line = 1; line <= grid; line += 1) {
    pixels[line] = {};
    for (let column = 1; column <= grid; column += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newPixel.style.width = '40px';
      newPixel.style.height = '40px';
      pixels[line][column] = 'white';
      containerPixelBoard.appendChild(newPixel);
    }
  }
}

// Req. 06
function selectInitialColorPaint(color) {
  const colors = document.querySelectorAll('.color');

  colors.forEach((el) => {
    if (el.style.backgroundColor === color) {
      el.setAttribute('class', 'color selected');
      colorsObj.selected = color;
    }
  });
}

window.onload = () => {
  addColorsPalette(colorsObj);
  makePixelBoard(5);
  selectInitialColorPaint(colorsObj.black);
};
