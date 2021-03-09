function setColorPallet() {
  const arrayColor = document.querySelectorAll('.color');
  arrayColor[0].style.backgroundColor = 'black';
  arrayColor[0].className = 'selected';
  arrayColor[1].style.backgroundColor = 'red';
  arrayColor[2].style.backgroundColor = 'green';
  arrayColor[3].style.backgroundColor = 'blue';
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

setColorPallet();
generatePixelFrame();
