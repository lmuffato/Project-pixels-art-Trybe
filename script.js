const colorList = document.querySelectorAll('.color');
function colorPanel(){
for (let index = 0; index < 4; index += 1) {
  colorList[0].style.backgroundColor = 'black';
  colorList[0].classList.add('selected');
  colorList[0].className.length ='selected';
  colorList[1].style.backgroundColor = 'yellow';
  colorList[1].classList.add('selected');
  colorList[1].className.length ='selected';
  colorList[2].style.backgroundColor = 'red';
  colorList[2].classList.add('selected');
  colorList[2].className.length ='selected';
  colorList[3].style.backgroundColor = 'green';
  colorList[3].classList.add('selected');
  colorList[3].className.length ='selected';
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

  function getPanelColors(){
    const colors = document.getElementById('color-palette');
    colors.addEventListener('click', (event) => {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
  getPanelColors();
  
function setPanelColors(){
    const tbl = document.getElementById('pixel-board');
    tbl.addEventListener('click' , (event) => {
      const color = document.querySelector('.selected').style.backgroundColor;
      event.target.style.backgroundColor = color;
    });    
  }
setPanelColors();

window.onload = () => {
  colorPanel();
  genereteTableBoard();
  getPanelColors();
  setPanelColors();
};