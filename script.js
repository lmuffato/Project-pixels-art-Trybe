
const getBlack = document.getElementById('black');
const getYellow = document.getElementById('yellow');
const getBlue = document.getElementById('blue');
const getMagenta = document.getElementById('magenta');

function defaultColor() {
  const defaultBlackClass = getBlack.className = 'color selected';
  return defaultBlackClass;
}

defaultColor();

function setColorBlack() {
  getBlack.className = 'color selected';
  getMagenta.className = 'color';
  getYellow.className = 'color';
  getBlue.className = 'color';
}

getBlack.addEventListener('click', setColorBlack);

function setColorMagenta() {
  getBlack.className = 'color';
  getMagenta.className = 'color selected';
  getYellow.className = 'color';
  getBlue.className = 'color';
}

getMagenta.addEventListener('click', setColorMagenta);

function setColorYellow() {
  getBlack.className = 'color';
  getMagenta.className = 'color';
  getYellow.className = 'color selected';
  getBlue.className = 'color';
}

getYellow.addEventListener('click', setColorYellow);

function setColorBlue() {
  getBlack.className = 'color';
  getMagenta.className = 'color';
  getYellow.className = 'color';
  getBlue.className = 'color selected';
}

getBlue.addEventListener('click', setColorBlue);
