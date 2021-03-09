function randomColor() {
  return Math.random() * 255;
}

function setColorPallet() {
  const arrayColor = document.querySelectorAll('.color');
  arrayColor[0].style.backgroundColor = 'black';
  arrayColor[0].classList.add('selected');
  arrayColor[1].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
  arrayColor[2].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
  arrayColor[3].style.backgroundColor = `rgb(${randomColor()}, ${randomColor()},${randomColor()})`;
}

function generatePixelFrame(rows = 5, columns = 5) {
  const pixelBoard = document.getElementById('pixel-board');

  for (let index = 0; index < rows; index += 1) {
    const tableRow = document.createElement('tr');
    for (let data = 0; data < columns; data += 1) {
      const cell = document.createElement('td');
      cell.className = 'pixel';
      cell.style.backgroundColor = 'white';
      tableRow.appendChild(cell);
    }
    pixelBoard.appendChild(tableRow);
  }
  pixelBoard.style.border = 'solid black 1px';
}

function getColors() {
  const palletColors = document.getElementById('color-palette');
  palletColors.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });
}

function setColor() {
  const table = document.getElementById('pixel-board');
  table.addEventListener('click', (event) => {
    const color = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = color;
  });
}

window.onload = () => {
  setColorPallet();
  generatePixelFrame();
  getColors();
  setColor();
};
