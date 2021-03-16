const pixels = document.getElementsByClassName('pixel');

function createBoard(lines, columns) {
  const pixelBoard = document.querySelector('#pixel-board');

  for (let index = 0; index < lines; index += 1) {
    const numberOfLines = document.createElement('tr');
    pixelBoard.appendChild(numberOfLines);
    for (let indexColum = 0; indexColum < columns; indexColum += 1) {
      const numberOfColumns = document.createElement('td');
      numberOfLines.appendChild(numberOfColumns);
      numberOfColumns.className = 'pixel';
    }
  }
}

function initiateColor() {
  // Para este requisito consultei os seguintes links:
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  // https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map?gclid=Cj0KCQiA1pyCBhCtARIsAHaY_5cscwZQUJTOMnmG6B8naM2D5eFCmquk0s-168iGWrcyGy1gb6YSgEMaAmwpEALw_wcB
  Array.from(pixels).forEach((element) => {
    const pixel = element;
    pixel.style.backgroundColor = 'white';
  });
}

function updatePixelSize() {
  Array.from(pixels).forEach((element) => {
    const pixel = element;
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.boxSizing = 'border-box';
  });
}

function updatePixelBorder() {
  Array.from(pixels).forEach((element) => {
    const pixel = element;
    pixel.style.border = 'black solid 1px';
  });
}

function createClassSelected() {
  const divSquares = document.querySelector('#color-palette');
  const blackSquare = divSquares.firstElementChild;
  blackSquare.classList.add('selected');
}

function removeAllSelected(list) {
  Array.from(list).forEach((div) => {
    div.classList.remove('selected');
  });
}

function changePlaceClassSelected() {
  const divSquares = document.getElementsByClassName('color');
  Array.from(divSquares).forEach((div) => {
    div.addEventListener('click', (event) => {
      removeAllSelected(divSquares);
      event.target.classList.add('selected');
    });
  });
}

function getDivColor() {
  // Para essa função contei com ajuda dos colegas: Felipe Muller e Andre Jacques via thread.
  // Também com a leitura do seguinte link:
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
  const divSelected = document.querySelector('.selected');
  const divBackground = window.getComputedStyle(divSelected).getPropertyValue('background-color');
  return divBackground;
}

function colorPixels() {
  Array.from(pixels).forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      const element = event.target;
      element.style.backgroundColor = getDivColor();
    });
  });
}

function clickButton() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', initiateColor);
}

window.onload = function startSession() {
  createBoard(5, 5);
  initiateColor();
  updatePixelSize();
  updatePixelBorder();
  createClassSelected();
  changePlaceClassSelected();
  colorPixels();
  clickButton();
};
