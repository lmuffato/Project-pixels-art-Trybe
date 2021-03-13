function panelColors() {
  const colorList = document.querySelectorAll('.color');
  colorList[0].style.backgroundColor = 'black';
  colorList[1].style.backgroundColor = 'yellow';
  colorList[2].style.backgroundColor = 'red';
  colorList[3].style.backgroundColor = 'green';
}
panelColors();

let tableBoard = document.querySelector('#pixel-board');
  function pixelBoard(){
    for (let index = 0; index < 5; index +=1){
      let tableRow = document.createElement('tr');
      tableBoard.appendChild('tableRow');
        for (let index = 0; index < 5; index +=1){
          let tableData = document.createElement('td');
          tableRow.appendChild(tableData);
          tableData.classList.add('pixel');
    }
  }  
}
tableBoard();