window.onload = function () {
  const colorPalette = document.querySelector('#color-palette');
  function createPalette() {
    for (let index = 0; index < 4; index += 1) {
      const colorDiv = document.createElement('div');
      colorPalette.appendChild(colorDiv);
      if (index === 0) {
        colorDiv.classList.add('color', 'black');
      } else if (index === 1) {
        colorDiv.classList.add('color', 'red');
      } else if (index === 2) {
        colorDiv.classList.add('color', 'blue');
      } else if (index === 3) {
        colorDiv.classList.add('color', 'green');
      }
    }
  } createPalette();

  const pixelBoard = document.querySelector('#pixel-board');
  function createPixelBoard() {
    for (let index = 0; index < 5; index += 1) {
      const tableRow = document.createElement('tr');
      pixelBoard.appendChild(tableRow);
      for (let index = 0; index < 5; index += 1) {
        const tableCell = document.createElement('td');
        tableRow.appendChild(tableCell);
        tableCell.classList.add('pixel');
      }
    }
  } createPixelBoard();

  const colorClassName = document.querySelectorAll('.color');
  function colorSelected() {
    for (let index = 0; index < colorClassName.length; index += 1) {
      colorClassName[0].classList.add('selected');
    }
  } colorSelected();

};