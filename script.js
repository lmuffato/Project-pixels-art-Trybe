function createSquares() {
  const colorPalette = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const makeSquare = document.createElement('td');
    makeSquare.className = 'color';
    colorPalette.appendChild(makeSquare);
  }
}

function generateColor() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;
  console.log(color);
  return color;
}

function colorSquares() {
  const colors = ['black', generateColor(), generateColor(), generateColor()];
  const squares = document.getElementsByClassName('color');
  for (let index = 0; index < squares.length; index += 1) {
    squares[index].style.backgroundColor = colors[index];
  }
  squares[0].className = 'color selected';
}

function createBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const row = document.createElement('tr');
    pixelBoard.appendChild(row);
    for (let index2 = 0; index2 < 5; index2 += 1) {
      const collumn = document.createElement('td');
      collumn.className = 'pixel';
      const lastRow = pixelBoard.lastChild;
      lastRow.appendChild(collumn);
    }
  }
}

let colorSelect = document.getElementById('color-palette');
colorSelect.addEventListener('click', function(click) {
  let currentSelected = document.getElementsByClassName('selected');
  currentSelected[0].className = 'color';
    click.target.className = 'color selected';
});

function loadPage() {
  createSquares();
  colorSquares();
  createBoard();
}

window.onload = loadPage;
