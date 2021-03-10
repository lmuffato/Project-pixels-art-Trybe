const paleteColors = document.querySelector('#color-palette');
const tablePixels = document.querySelector('#pixel-board');
const eSelected = document.getElementsByClassName('color');

window.onload = () => {
  eSelected[0].className = 'color selected';
};

function generateColors() {
  const rgb1 = Math.floor(Math.random() * 255);
  const rgb2 = Math.floor(Math.random() * 255);
  const rgb3 = Math.floor(Math.random() * 255);
  const rgbColor = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
  return rgbColor;
}

function createBox() {
  for (let i = 0; i < 4; i += 1) {
    const boxColor = document.createElement('div');
    boxColor.className = 'color';
    paleteColors.appendChild(boxColor);
    boxColor.style.backgroundColor = generateColors();
  }
  paleteColors.firstElementChild.style.backgroundColor = 'black';
}

function createTablePixels() {
  for (let i = 0; i < 5; i += 1) {
    const tr = document.createElement('tr');
    tablePixels.appendChild(tr);
    tr.className = 'table';
    for (let k = 0; k < 5; k += 1) {
      const td = document.createElement('td');
      document.querySelectorAll('.table')[i].appendChild(td);
      td.className = 'pixel';
      td.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
}

createBox();
createTablePixels();

const colorList = document.querySelectorAll('.color');

for (let i = 0; i < colorList.length; i += 1) {
  colorList[i].addEventListener('click', () => {
    for (let j = 0; j < colorList.length; j += 1) {
      colorList[j].classList.remove('selected');
    }
    colorList[i].className = 'color selected';
  });
}
