const blackBox = document.getElementsByClassName('color')[0];
blackBox.style.backgroundColor = 'black';
const greenBox = document.getElementsByClassName('color')[1];
greenBox.style.backgroundColor = 'green';
const yellowBox = document.getElementsByClassName('color')[2];
yellowBox.style.backgroundColor = 'yellow';
const purpleBox = document.getElementsByClassName('color')[3];
purpleBox.style.backgroundColor = 'purple';

const tableID = document.getElementById('pixel-board');


function TableMaker (){
  for (let index = 0; index < 5; index += 1){
    let trOfTable = document.createElement('tr');
    tableID.appendChild(trOfTable)
    for (let index = 0; index < 5; index += 1){
      let pixelOnTable = document.createElement('th')
      pixelOnTable.className = 'pixel'
      pixelOnTable.style.backgroundColor = 'white'
    }
  }
}

TableMaker();