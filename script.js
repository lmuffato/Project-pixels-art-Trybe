const numberOfLines = 5;
const numberOfColumns = 5;

function createPixel(numberOfColumnsCP, divElementLine) {
  for (let index = 0; index < numberOfColumnsCP; index += 1) {
    const divElementPixel = document.createElement('div');
    divElementPixel.className = 'pixel';

    divElementLine.appendChild(divElementPixel);
  }
}

function createBoard(numberOfLinesCB, numberOfColumnsCB) {
  for (let index = 0; index < numberOfLinesCB; index += 1) {
    const divElementLine = document.createElement('div');
    divElementLine.className = 'pixel-line';

    createPixel(numberOfColumnsCB, divElementLine);

    document.getElementById('pixel-board').appendChild(divElementLine);
  }
}

createBoard(numberOfLines, numberOfColumns);
