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

window.onload = function run() {
  createBoardLines();
  createBoard();
  innitialSelection();
};
