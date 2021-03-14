const colorList = document.querySelectorAll('.color');
    for (let index = 0; index < 4; index += 1){
        colorList[0].style.backgroundColor = 'blue';
        colorList[1].style.backgroundColor = 'yellow';
        colorList[2].style.backgroundColor = 'red';
        colorList[3].style.backgroundColor = 'green';
    }
colorList[0].style.backgroundColor = 'black';

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