const board = document.querySelector('#pixel-board');

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

pixelBoard(5);
