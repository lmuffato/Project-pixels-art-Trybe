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

window.onload = function startSession() {
  initiateColor();
  updatePixelSize();
  updatePixelBorder();
};
