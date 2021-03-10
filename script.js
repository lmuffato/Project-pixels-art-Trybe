const colorsObj = {
  black: 'black',
  red: 'red',
  blue: 'blue',
  green: 'green',
  selected: 'black',
};

const pixels = {};

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

function clearElementsPixelBoard() {
  const pixelBoard = document.getElementsByClassName('pixel');
  for (let index = pixelBoard.length - 1; index >= 0; index -= 1) {
    pixelBoard[index].remove();
  }
}

// Req. 08
function paintPixel() {
  const pixelsForPaint = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsForPaint.length; index += 1) {
    pixelsForPaint[index].addEventListener('click', () => {
      pixelsForPaint[index].style.backgroundColor = colorsObj.selected;
    });
  }
}

// Req. 04
function makePixelBoard(grid) {
  clearElementsPixelBoard();
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
  paintPixel();
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

// Req. 09
function resetPixelBoard() {
  const pixelsForPaint = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsForPaint.length; index += 1) {
    pixelsForPaint[index].style.backgroundColor = 'white';
  }
}

function makeButtonReset() {
  const secBtn = document.getElementById('secBtn');
  const newButton = document.createElement('button');
  newButton.innerText = 'Limpar';
  newButton.addEventListener('click', resetPixelBoard);

  secBtn.appendChild(newButton);
}

function msgError() {
  const newMsg = document.createElement('label');
  newMsg.id = 'msg-error';
  newMsg.innerText = 'Você deve inserir um valor entre 5 e 50';
  return newMsg;
}

function makeInputGrid() {
  const secBtn = document.getElementById('grid-size');
  const newInput = document.createElement('input');
  newInput.placeholder = 'Tamanho da grid';
  newInput.addEventListener('change', () => {
    if (newInput.value < 5 || newInput.value > 50) {
      const item = document.getElementById('msg-error');
      if (item === null) {
        secBtn.appendChild(msgError());
      }
    } else {
      const item = document.getElementById('msg-error');
      if (item !== null) {
        item.remove();
      }
      makePixelBoard(newInput.value);
    }
  });
  secBtn.appendChild(newInput);
}

window.onload = () => {
  addColorsPalette(colorsObj);
  makePixelBoard(5);
  selectInitialColorPaint(colorsObj.black);
  makeButtonReset();
  makeInputGrid();
};
