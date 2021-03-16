const colorList = document.querySelectorAll('.color');
function colorPanel(){
  for (let index = 0; index < 4; index += 1) {
    colorList[0].style.backgroundColor = 'black';
    colorList[1].style.backgroundColor = 'yellow';
    colorList[2].style.backgroundColor = 'red';
    colorList[3].style.backgroundColor = 'green';
  }
}
colorPanel();
function generateTableBoard() {
  const tableBoard = document.getElementById('pixel-board');
    for (let index = 0; index <= 4; index += 1) {
    const row = document.createElement("tr");
    for (let data = 0; data <= 4; data += 1) {
    const cell = document.createElement("td");
    cell.className = 'pixel';
    row.appendChild(cell);
  }
  tableBoard.appendChild(row);
}
}
generateTableBoard();
  

