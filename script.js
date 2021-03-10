const getBlack = document.querySelector('#black');
const getYellow = document.querySelector('#yellow');
const getBlue = document.querySelector('#blue');
const getMagenta = document.querySelector('#magenta');

function getColor() {
  getBlack.style.backgroundColor = 'black';
  getYellow.style.backgroundColor = '#fee440';
  getBlue.style.backgroundColor = '#00bbf9';
  getMagenta.style.backgroundColor = '#f15bb5';
}

getColor();

getBlack.addEventListener('click', setColorBlack);

function setColorBlack() {
  getBlack.className = 'color selected';
  getMagenta.className = 'color';
  getYellow.className = 'color';
  getBlue.className = 'color';
}

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

function colorPixel() {
  const pixel = document.querySelector('#pixel-board');

  pixel.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    const localPixel = event.target;
    console.log(localPixel);
    localPixel.style.backgroundColor = selectedColor;
  });
}

colorPixel();