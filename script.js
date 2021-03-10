function colorsPalette() {
  const squareBlack = document.getElementById('black');
  squareBlack.style.backgroundColor = 'black';

  const squareBlue = document.getElementById('blue');
  squareBlue.style.backgroundColor = 'blue';

  const squareRed = document.getElementById('red');
  squareRed.style.backgroundColor = 'red';

  const squareYellow = document.getElementById('yellow');
  squareYellow.style.backgroundColor = 'yellow';
}

function pixelBoard() {
  const board = document.getElementsByClassName('pixel');
  board.style.backgroundColor = 'white';
}

window.onload = function load() {
  colorsPalette();
  pixelBoard();
};
