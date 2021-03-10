function rgbColor() {
  const colorR = Math.round(Math.random() * 256);
  const colorG = Math.round(Math.random() * 256);
  const colorB = Math.round(Math.random() * 256);
  return 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')';
}

function colorsPalette() {
  const squareBlack = document.getElementById('black');
  squareBlack.style.backgroundColor = 'black';
  squareBlack.classList.add = 'selected';

  const squareBlue = document.getElementById('blue');
  squareBlue.style.backgroundColor = rgbColor();

  const squareRed = document.getElementById('red');
  squareRed.style.backgroundColor = rgbColor();

  const squareYellow = document.getElementById('yellow');
  squareYellow.style.backgroundColor = rgbColor();
}

window.onload = function load() {
  colorsPalette();
};
