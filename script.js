function rgbColor() {
  const colorR = Math.round(Math.random() * 256);
  const colorG = Math.round(Math.random() * 256);
  const colorB = Math.round(Math.random() * 256);
  return 'rgb(' + colorR + ',' + colorG + ',' + colorB + ')';
}

function colorsPalette() {
  const squareBlack = document.getElementById('black');
  squareBlack.style.backgroundColor = 'black';
  squareBlack.setAttribute('class','color selected');
   
  const squareBlue = document.getElementById('color2');
  const clr2 = rgbColor();
  squareBlue.style.backgroundColor = clr2;

  const squareRed = document.getElementById('color3');
  const clr3 = rgbColor();
  squareRed.style.backgroundColor = clr3;

  const squareYellow = document.getElementById('color4');
  const clr4 = rgbColor();
  squareYellow.style.backgroundColor = clr4;
}

window.onload = function load() {
  colorsPalette();
};



