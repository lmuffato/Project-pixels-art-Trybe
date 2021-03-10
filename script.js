function initiateColor() {
  const pixels = document.getElementsByClassName('pixel');
  // Para este requisito consultei os seguintes links:
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  // https://www.alura.com.br/artigos/javascript-quando-devo-usar-foreach-e-map?gclid=Cj0KCQiA1pyCBhCtARIsAHaY_5cscwZQUJTOMnmG6B8naM2D5eFCmquk0s-168iGWrcyGy1gb6YSgEMaAmwpEALw_wcB
  Array.from(pixels).forEach((element) => {
    const pixel = element;
    pixel.style.backgroundColor = 'white';
  });
}

function updatePixelSize() {
  const pixels = document.getElementsByClassName('pixel');
  Array.from(pixels).forEach((element) => {
    const pixel = element;
    pixel.style.width = '40px';
    pixel.style.height = '40px';
    pixel.style.boxSizing = 'border-box';
  });
}

function updatePixelBorder() {
  const pixels = document.getElementsByClassName('pixel');
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
  const divSelected = document.querySelector('.selected');
  const divBackground = window.getComputedStyle(divSelected).getPropertyValue('background-color');
  return divBackground;
}

function colorPixels() {
  const pixels = document.getElementsByClassName('pixel');

  Array.from(pixels).forEach((pixel) => {
    pixel.addEventListener('click', (event) => {
      const element = event.target;
      element.style.backgroundColor = getDivColor();
    });
  });
}

window.onload = function startSession() {
  initiateColor();
  updatePixelSize();
  updatePixelBorder();
  createClassSelected();
  changePlaceClassSelected();
  colorPixels();
};
