window.onload(loadPage());

function createSquares () {
  for (let i = 0; i < 4; i++) {
    let colorPalette = document.getElementById('color-palette');
    let makeSquare = document.createElement('td');
    makeSquare.className = 'color';
    colorPalette.appendChild(makeSquare);
  }
}

function loadPage() {
  createSquares();
}