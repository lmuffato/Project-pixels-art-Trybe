window.onload = function () {
  function setPalette(color1, color2, color3) {
    const getPalette = document.getElementsByClassName('color');
    getPalette[0].style.backgroundColor = 'black';
    getPalette[1].style.backgroundColor = color1;
    getPalette[2].style.backgroundColor = color2;
    getPalette[3].style.backgroundColor = color3;
  }

  setPalette('red', 'green', 'blue');

  // function createCanvas() {
  //   const getRow = document.getElementsByTagName('tr');
  //   for (let index = 0; index < getRow.length; index += 1) {
  //     let createColumn = document.createElement('td');
  //     createColumn.className = 'pixel';
  //     for (let columnIndex = 0; columnIndex <= getRow.length; columnIndex += 1) {
  //       getRow[index].append(createColumn);
  //     }
  //   }
  // }

  // createCanvas();
};
