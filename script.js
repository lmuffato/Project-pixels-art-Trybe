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
  const tableBoard = document.querySelector('#pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const row = document.createElement('tr');
    for (let data = 0; data < 5; data += 1) {
      const cell = document.createElement('td');
      cell.className = 'pixel';
      row.appendChild(cell);
    }
    tableBoard.appendChild(row);
  }
}
generateTableBoard();