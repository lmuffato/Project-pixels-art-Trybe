function panelColors(col1, col2, col3) {
  const colorList = document.querySelectorAll('.color');
    for (let index = 0; index < 4; index += 1){
        colorList[0].style.backgroundColor = 'black';
        colorList[1].style.backgroundColor = col1;
        colorList[2].style.backgroundColor = col2;
        colorList[3].style.backgroundColor = col3;
    }
}
panelColors('yellow', 'red', 'green');

const tableBoard = document.querySelector('#pixel-board');
  function pixelBoard(){
    for (let index = 0; index < 5; index +=1){
      const tableRow = document.createElement('tr');
      tableBoard.appendChild('tableRow');
        for (index = 0; index < 5; index +=1){
          const tableData = document.createElement('td');
          tableRow.appendChild(tableData);
          tableData.classList.add('pixel');
    }
  }  
}
pixelBoard();