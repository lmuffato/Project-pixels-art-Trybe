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

const selectedClass = 'color selected';

function setColorBlack() {
  getBlack.className = selectedClass;
  getMagenta.className = 'color';
  getYellow.className = 'color';
  getBlue.className = 'color';
}

getBlack.addEventListener('click', setColorBlack);

function setColorMagenta() {
  getBlack.className = 'color';
  getMagenta.className = selectedClass;
  getYellow.className = 'color';
  getBlue.className = 'color';
}

getMagenta.addEventListener('click', setColorMagenta);

function setColorYellow() {
  getBlack.className = 'color';
  getMagenta.className = 'color';
  getYellow.className = selectedClass;
  getBlue.className = 'color';
}

getYellow.addEventListener('click', setColorYellow);

function setColorBlue() {
  getBlack.className = 'color';
  getMagenta.className = 'color';
  getYellow.className = 'color';
  getBlue.className = selectedClass;
}

getBlue.addEventListener('click', setColorBlue);

function colorPixel() {
  const pixelBoard = document.querySelector('#pixel-board');
  pixelBoard.addEventListener('click', (event) => {
    const selectedColor = document.querySelector('.selected').style.backgroundColor;
    const localPixel = event.target;
    if (localPixel.className === 'pixel') {
      localPixel.style.backgroundColor = selectedColor;
    }
  });
}

function clear() {
  const pixel = document.getElementsByClassName('pixel');
  const bttn = document.getElementById('clear-board');

  bttn.addEventListener('click', () => {
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}

window.onload = () => {
  getColor();
  colorPixel();
  clear();
};
