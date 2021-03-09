function sizeOfBoard() {
  const boardSize = document.querySelector('#board-size').value;
  if (boardSize === '') { alert('Board inválido!'); }
  for (let index = 0; index < boardSize; index += 1) {
    const tagLinha = document.createElement('div');
    tagLinha.className = 'line';
    tagLinha.style.height = '42px';
    document.querySelector('#pixel-board').appendChild(tagLinha);
    for (let i = 0; i < boardSize; i += 1) {
      const tagPixel = document.createElement('div');
      tagPixel.className = 'pixel';
      tagPixel.style.backgroundColor = 'white';
      tagPixel.style.width = '40px';
      tagPixel.style.height = '40px';
      tagPixel.style.display = 'inline-block';
      tagPixel.style.border = 'solid black 1px';
      document.querySelectorAll('.line')[index].appendChild(tagPixel);
    }
  }
}

document.querySelector('#generate-board').addEventListener('click', sizeOfBoard);

function selectColor(event) {
  for (let index = 0; index < 4; index += 1) {
    document.querySelectorAll('.color')[index].className = 'color';
  }
  if (event.target.className === 'color') {
    event.target.className = 'color selected';
  }
}

document.querySelector('#color-palette').addEventListener('click', selectColor);

function pixelColor(event) {
  const c = window.getComputedStyle(document.querySelector('.selected')).getPropertyValue('background-color');
  event.target.style.backgroundColor = c;
}

document.querySelector('#pixel-board').addEventListener('click', pixelColor);

function clearBoard() {
  for (let index = 0; index < document.querySelectorAll('.pixel').length; index += 1) {
    document.querySelectorAll('.pixel')[index].style.backgroundColor = 'white';
  }
}

document.getElementById('clear-board').addEventListener('click', clearBoard);

function buttonsColor() {
  const newColorBlue = `#${Math.ceil(Math.random() * 999999)}`;
  document.getElementById('blue').style.backgroundColor = newColorBlue;
  const newColorGreen = `#${Math.ceil(Math.random() * 999999)}`;
  document.getElementById('green').style.backgroundColor = newColorGreen;
  const newColorYellow = `#${Math.ceil(Math.random() * 999999)}`;
  document.getElementById('yellow').style.backgroundColor = newColorYellow;
}
