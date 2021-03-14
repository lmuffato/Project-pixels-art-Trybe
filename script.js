const getBlack = document.querySelector('#black');
const getColor1 = document.querySelector('#color1');
const getColor2 = document.querySelector('#color2');
const getColor3 = document.querySelector('#color3');

// Função usada de base retirada de: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript

function generateColor() {
  const r = (Math.random() * 255);
  const g = (Math.random() * 255);
  const b = (Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function getColor() {
  getBlack.style.backgroundColor = 'black';
  getColor1.style.backgroundColor = generateColor();
  getColor2.style.backgroundColor = generateColor();
  getColor3.style.backgroundColor = generateColor();
}

const getColors = document.querySelectorAll('.color');
const getPalette = document.querySelector('#color-palette');

function renameClass() {
  getPalette.addEventListener('click', (eventselect2) => {
    for (let index = 0; index < getColors.length; index += 1) {
      const eventSelectName = eventselect2.target;
      const eventSelectClass = eventSelectName.target.className;
      if (eventSelectClass === 'color' && getColors[index] !== eventSelectName.target) {
        getColors[index].className = 'color';
      }
    }
  });
}

function selectedPalette() {
  getPalette.addEventListener('click', (eventselect) => {
    if (eventselect.target.className === 'color') {
      const tagSelected = eventselect.target;
      tagSelected.className = 'color selected';
      renameClass();
    }
  });
}

getBlack.addEventListener('click', selectedPalette);
getColor1.addEventListener('click', selectedPalette);
getColor2.addEventListener('click', selectedPalette);
getColor3.addEventListener('click', selectedPalette);

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
  generateColor();
  selectedPalette();
};
