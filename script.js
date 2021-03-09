function createBoardLines() {
  let local = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    let line = document.createElement('div');
    line.className = 'box-line';
    local.appendChild(line);
  }
}

function createBoard() {
  let local = document.querySelectorAll('.box-line');
  for (let index = 0; index < local.length; index += 1) {
    for (let index2 = 0; index2 < 5; index2 += 1) {
      let column = document.createElement('div');
      column.className = 'pixel';
      local[index].appendChild(column);
    }
  }
}

window.onload = function() {
  createBoardLines();
  createBoard();
}