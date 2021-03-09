const numberOfLines = 5;
const numberOfColumns = 5;
const paletteColor = document.querySelectorAll('.color');

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

paletteColor.forEach((element) => {
  element.addEventListener('click', (elementTarget) => {
    const pixelElement = elementTarget;
    const pixel = document.getElementsByClassName('color');

    for (let index = 0; index < pixel.length; index += 1) {
      if (pixel[index].className === 'color selected') {
        pixel[index].className = 'color';
      }
    }
    pixelElement.target.className += ' selected';
  });
});
