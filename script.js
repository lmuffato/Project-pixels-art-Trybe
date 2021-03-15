const colorSelected = 'color selected';

function createBoardLines(input) {
  const local = document.getElementById('pixel-board');
  for (let index = 0; index < input; index += 1) {
    const line = document.createElement('div');
    line.className = 'box-line';
    local.appendChild(line);
  }
}

function createBoard(input) {
  const local = document.querySelectorAll('.box-line');
  for (let index = 0; index < local.length; index += 1) {
    for (let index2 = 0; index2 < input; index2 += 1) {
      const column = document.createElement('div');
      column.className = 'pixel';
      local[index].appendChild(column);
    }
  }
}

function innitialSelection() {
  const local = document.querySelector('#color1');
  local.className = colorSelected;
}

function setColor() {
  const selectedColor = document.getElementsByClassName(colorSelected);
  const color = document.getElementsByClassName('color');
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', () => {
      if (color[index].className === 'color') {
        selectedColor[0].className = 'color';
        color[index].className = colorSelected;
      }
    });
  }
}

function paintPixel() {
  const pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    const element = pixel[index];
    element.addEventListener('click', () => {
      const colorId = document.getElementsByClassName(colorSelected)[0];
      const color = window.getComputedStyle(colorId).getPropertyValue('background-color');
      element.style.backgroundColor = color;
    });
  }
}

function clearBtn() {
  const btn = document.getElementById('clear-board');
  btn.addEventListener('click', () => {
    const pixel = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      const element = pixel[index];
      element.style.backgroundColor = 'white';
    }
  });
}

function removeBoard() {
  const line = document.getElementsByClassName('box-line');
  while (line.length > 0) {
    line[0].remove();
  }
}

function boardWorking(input) {
  createBoardLines(input);
  createBoard(input);
  paintPixel();
  clearBtn();
}

function getNumber() {
  const btn = document.getElementById('generate-board');
  const size = document.getElementById('board-size');
  let input = 5;
  btn.addEventListener('click', () => {
    removeBoard();
    if (size.value === '') {
      window.alert('Board inválido!');
    } else {
      input = size.value;
      boardWorking(input);
    }
  });
  boardWorking(input);
}

window.onload = function run() {
  getNumber();
  innitialSelection();
  setColor();
};
