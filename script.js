const colorSelected = 'color selected';

function createBoardLines() {
  const local = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const line = document.createElement('div');
    line.className = 'box-line';
    local.appendChild(line);
  }
}

function createBoard() {
  const local = document.querySelectorAll('.box-line');
  for (let index = 0; index < local.length; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
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
      const color = window.getComputedStyle(colorId).getPropertyValue('background-color')
      element.style.backgroundColor = color;
    });
  }
}

window.onload = function run() {
  createBoardLines();
  createBoard();
  innitialSelection();
  setColor();
  paintPixel();
};
