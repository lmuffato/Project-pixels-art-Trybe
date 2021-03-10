function createSquares() {
  const colorPalette = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const makeSquare = document.createElement('td');
    makeSquare.className = 'color';
    colorPalette.appendChild(makeSquare);
  }
}

function colorSquares() {
  const colors = ['black', 'darkred', 'darkgreen', 'darkblue'];
  const squares = document.getElementsByClassName('color');
  for (let index = 0; index < squares.length; index += 1) {
    squares[index].style.backgroundColor = colors[index];
  }
}

function createBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1){
    const row = document.createElement('tr')
    pixelBoard.appendChild(row);
    for (let index = 0; index < 5; index += 1){
      const collumn = document.createElement('td');
      collumn.className = 'pixel';
      const lastRow = pixelBoard.lastChild;
      lastRow.appendChild(collumn);
    }
  }
}

function loadPage() {
  createSquares();
  colorSquares();
  createBoard();
}

window.onload = loadPage;
