function createSquares() {
  for (let index = 0; index < 4; index += 1) {
    const colorPalette = document.getElementById('color-palette');
    const makeSquare = document.createElement('td');
    makeSquare.className = 'color';
    colorPalette.appendChild(makeSquare);
  }
}

function colorSquares() {
  let colors = ['black', 'darkred', 'darkgreen', 'darkblue'];
  let squares = document.getElementsByClassName('color');
  for (let index = 0; index < squares.length; index += 1) {
    squares[index].style.backgroundColor = colors[index];
  }
}

function loadPage() {
  createSquares();
  colorSquares();
}

window.onload = loadPage();
