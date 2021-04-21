const color = 'rgb(0 , 0 , 0)';

function aleatoryColor() {
  let newColor = 'rgb(';
  newColor += `${Math.round(Math.random() * 255)} , `;
  newColor += `${Math.round(Math.random() * 255)} , `;
  newColor += `${Math.round(Math.random() * 255)})`;
  return newColor;
}

function createPalette(numberOfColors) {
  for (let index = 0; index < numberOfColors; index += 1) {
    const paletteColor = document.createElement('div');
    paletteColor.className = 'color';
    document.getElementsByClassName('color-palette')[0].appendChild(paletteColor);
    const allPaletColors = document.querySelectorAll('.color');
    if (index === 0) {
      allPaletColors[0].style.backgroundColor = color;
      allPaletColors[0].className += ' selected';
    } else {
      allPaletColors[index].style.backgroundColor = aleatoryColor();
    }
  }
}

function createButton() {
  const button = document.createElement('button');
  button.innerText = 'Limpar';
  button.className = 'clear';
  button.id = 'clear-board';
  document.querySelector('.button-place').appendChild(button);
}

function changeSizeInputf() {
  const changeSizeInput = document.createElement('input');
  changeSizeInput.placeholder = 'VQV';
  changeSizeInput.id = 'board-size';
  changeSizeInput.type = 'number';
  document.querySelector('.changeSize-place').appendChild(changeSizeInput);
}

const changeSize = () => {
  const changeSizeButton = document.createElement('button');
  changeSizeButton.innerText = 'Mudar tamanho';
  changeSizeButton.id = 'generate-board';
  document.querySelector('.changeSize-place').appendChild(changeSizeButton);
  changeSizeButton.addEventListener('click', () => {
    const sizeValue = document.getElementById('board-size').value;
    if (sizeValue > 5 && sizeValue < 50) {
      const erase = document.querySelector('.pixel-board-inside');
      erase.innerText = '';
      pixelBoard(sizeValue);
    }
  });
}

function pixelBoard(matrix) {
  for (let index = 0; index < matrix; index += 1) {
    const pixelsLine = document.createElement('div');
    pixelsLine.className = 'pixel-line';
    document.getElementsByClassName('pixel-board-inside')[0].appendChild(pixelsLine);
    for (let index2 = 0; index2 < matrix; index2 += 1) {
      const pixelsColumn = document.createElement('div');
      pixelsColumn.className = 'pixel';
      document.querySelectorAll('.pixel-line')[index].appendChild(pixelsColumn);
    }
  }
}

function paint(coloring) {
  const colorings = coloring;
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  colorings.target.style.backgroundColor = selectedColor;
}

function theColors() {
  const colors = document.querySelectorAll('.color');
  function changeColor(event) {
    const events = event;
    for (let index = 0; index < colors.length; index += 1) {
      colors[index].className = 'color';
    }
    events.target.className = 'color selected';
  }
  document.querySelectorAll('.color').forEach((item) => {
    item.addEventListener('click', changeColor);
  });
}

function clearning() {
  const onclickPixelBoard = document.getElementsByClassName('pixel-board-inside')[0];
  onclickPixelBoard.addEventListener('click', paint);
  const clear = document.querySelectorAll('.pixel');
  function cleaner() {
    for (let index = 0; index < clear.length; index += 1) {
      clear[index].style.backgroundColor = 'white';
    }
  }
  document.getElementsByClassName('clear')[0].addEventListener('click', cleaner);
}



window.onload = function start() {
  createPalette(4);
  createButton();
  pixelBoard(8);
  theColors();
  clearning();
  changeSize();
  changeSizeInputf();
};
