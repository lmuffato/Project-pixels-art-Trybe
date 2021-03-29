const board = document.querySelector('#pixel-board');
const colors = document.querySelectorAll('.color');
const selectedColor = document.getElementsByClassName('selected');

const color1 = document.querySelectorAll('.color')[0];
color1.style.backgroundColor = 'rgb(0, 0, 0)';
const color2 = document.querySelectorAll('.color')[1];
color2.style.backgroundColor = 'rgb(255, 0, 0)';
const color3 = document.querySelectorAll('.color')[2];
color3.style.backgroundColor = 'rgb(0, 128, 0)';
const color4 = document.querySelectorAll('.color')[3];
color4.style.backgroundColor = 'rgb(0, 0, 255)';

function pixelBoard(size) {
  for (let i = 1; i <= size; i += 1) {
    const column = document.createElement('tr');
    board.appendChild(column);

    for (let j = 1; j <= size; j += 1) {
      const line = document.createElement('td');
      line.className = 'pixel';
      column.appendChild(line);
    }
  }
}

function colorSelection() {
  color1.className = 'color selected';

  for (let i = 0; i < colors.length; i += 1) {
    colors[i].addEventListener('click', (e) => {
      for (let j = 0; j < colors.length; j += 1) {
        colors[j].className = 'color';
      }
      e.target.className = 'color selected';
    });
  }
}

function paintBoard() {
  board.addEventListener('click', (e) => {
    const boardColor = e.target.style.backgroundColor;
    for (let i = 0; i < colors.length; i += 1) {
      const getColor = colors[i].style.backgroundColor;
      if (selectedColor.length > 0 && boardColor !== getColor) {
        const pixelColor = selectedColor[0].style.backgroundColor;
        e.target.style.backgroundColor = pixelColor;
      }
    }
  });
}

paintBoard();
colorSelection();
pixelBoard(5);
