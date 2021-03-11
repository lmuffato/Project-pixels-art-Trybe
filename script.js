window.onload = function () {
  function setPalette(color1, color2, color3) {
    const getPalette = document.getElementsByClassName('color');
    getPalette[0].style.backgroundColor = 'black';
    getPalette[1].style.backgroundColor = color1;
    getPalette[2].style.backgroundColor = color2;
    getPalette[3].style.backgroundColor = color3;
  }

  setPalette('red', 'green', 'blue');

  function createCanvas(tableSize) {
    const getTable = document.getElementById('pixel-board');
    
    for (let index = 0; index < tableSize; index += 1) {
      let createRow = document.createElement('tr');
      getTable.appendChild(createRow);
      for (let columnIndex = 0; columnIndex < tableSize; columnIndex += 1) {
        let createColumn = document.createElement('td');
        createRow.appendChild(createColumn);
        createColumn.className = 'pixel';
      }
    }
  }

  createCanvas(5);
};
