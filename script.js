const colorList = document.querySelectorAll('.color');
function colorPanel() {
  for (let index = 0; index < 4; index += 1) {
    colorList[0].style.backgroundColor = 'black';
    colorList[0].classList.add('selected');
    colorList[1].style.backgroundColor = 'yellow';
    colorList[2].style.backgroundColor = 'red';
    colorList[3].style.backgroundColor = 'green';
  }
}
colorPanel();
function generateTableBoard() {
  const tableBoard = document.getElementById('pixel-board');
  for (let index = 0; index <= 4; index += 1) {
    const row = document.createElement('tr');
    for (let data = 0; data <= 4; data += 1) {
      const cell = document.createElement('td');
      cell.className = 'pixel';
      row.appendChild(cell);
    }
    tableBoard.appendChild(row);
  }
}
generateTableBoard();
function getPanelColors() {
  const colors = document.getElementById('color-palette');
  colors.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });
}
getPanelColors();
function setPanelColors() {
  const tbl = document.getElementById('pixel-board');
  tbl.addEventListener('click', (event) => {
    const color = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = color;
  });
}
setPanelColors();
function clearBoard() {
  const whiteBoard = document.getElementById('clear-board');
  whiteBoard.addEventListener('click', (event) => {
    const pixelWhite = document.getElementsByClassName('pixel');
    for (let index = 0; index < pixelWhite.length; index += 1){
      pixelWhite[index].style.backgroundColor = 'white';
    }
  });
}
clearBoard();
setPanelColors();
window.onload = () => {
  colorPanel();
  getPanelColors();
  setPanelColors();
  clearBoard();
};
