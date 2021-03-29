const board = document.getElementById('pixel-board');
const colors = document.getElementsByClassName('color');
const color1 = document.querySelectorAll('.color')[0];

function pixelBoard(size) {
  for (let i = 1; i <= size; i += 1) {
    const column = document.createElement('tr');
    board.appendChild(column);

    for (let j = 1; j <= size; j += 1) {
      const line = document.createElement('td');
      line.className = 'pixel';
      column.appendChild(line);
    }
  }
}

function colorSelection() {
  color1.className = 'color selected';

  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', (e) => {
      for (let j = 0; j < colors.length; j += 1) {
        colors[j].className = 'color';
      }
      e.target.className = 'color selected';
    });
  }
}

colorSelection();
pixelBoard(5);
