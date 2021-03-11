const dimension = 30;
document.getElementById('pixel-board').style.marginLeft = ((window.innerWidth)/2)-(dimension/2)*40-50+dimension+'px';
function changeSelected(eventOrigin) {
  const selectedNow = document.querySelector('.selected');
  selectedNow.classList.remove('selected');
  const clickedNow = eventOrigin.target;
  clickedNow.classList.add('selected');
}

function addPaletteListener() {
  const colorElement = document.getElementsByClassName('color');

  for (let index = 0; index < colorElement.length; index += 1) {
    colorElement[index].addEventListener('click', changeSelected);
  }
}

function makeBoard(dim) {
  const board = document.getElementById('pixel-board');

  for (let indexLine = 0; indexLine < dim; indexLine += 1) {
    const creatingLine = document.createElement('div');
    creatingLine.className = 'lines';
    board.appendChild(creatingLine);
    const createdLine = document.getElementsByClassName('lines');

    for (let indexColum = 0; indexColum < dim; indexColum += 1) {
      const creatingPixel = document.createElement('div');
      creatingPixel.className = 'pixel';
      createdLine[indexLine].appendChild(creatingPixel);
    }
  }
}

function applyColor(eventOrigin) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const clickedPixel = eventOrigin.target;
  clickedPixel.style.backgroundColor = selectedColor;
}

function addPixelListener() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', applyColor);
  }
}

function cleanBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function addButtomListener() {
  const buttom = document.getElementById('clear-board');
  buttom.addEventListener('click', cleanBoard);
}

addPaletteListener();
makeBoard(dimension);
addPixelListener();
addButtomListener();
