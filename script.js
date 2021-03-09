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
  const local = document.getElementById('color1');
  local.className = 'color selected';
}

function setColor() {
  const selectedColor = document.getElementsByClassName('color selected');
  const color = document.getElementsByClassName('color');
  for (let index = 0; index < color.length; index += 1) {
    color[index].addEventListener('click', function setSelection() {
      if (color[index].className === 'color') {
        selectedColor[0].className = 'color';
        color[index].className = 'color selected';
      }
    });
  }
}

window.onload = function run() {
  createBoardLines();
  createBoard();
  innitialSelection();
  setColor();
};
