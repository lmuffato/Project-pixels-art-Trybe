let selectColorPalette = document.getElementById('color-palette');
let selectPixelBoard = document.getElementById('pixel-board');
let colors = ['black', 'red', 'blue', 'green'];
window.onload = function () {
  let setSelected = selectColorPalette.firstElementChild;
  setSelected.className = 'color selected';
}

createPalette(); // cria os 4 quadrados(cores) e os adiciona como filho da div de id = 'color-palette'
createBoardPixel(); //cria os nxn quadrados.
captureColor(); // seta a cor ao clicar no quadrado escolhido.
function paintPixel() {
  
  selectPixelBoard.addEventListener('click', function(event) {
    let setColorSelected = document.getElementsByClassName('selected');
    event.target.style.backgroundColor = setColorSelected[0].style.backgroundColor;
  })
}
paintPixel();

function captureColor() {
  let getElementsPalette = selectColorPalette.getElementsByClassName('color');
  selectColorPalette.addEventListener('click', function (event) {
    for (let i = 0; i < 4; i += 1) {
      setColor(getElementsPalette, i, event); //acrescenta class selected ao elemento q provocou a função
    }
  });
};

function setColor(getElementsPalette, i, event) {
  getElementsPalette[i].className = 'color'; //seta todas as classes das cores como apenas 'color';
  event.target.className = 'color selected';
};

function createBoardPixel() {
  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      let newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      selectPixelBoard.appendChild(newPixel);
    }
    let breakLine = document.createElement('br');
    selectPixelBoard.appendChild(breakLine);
  }
};

function createPalette() { // cria os 4 quadrados e os adiciona como filho da div de id = 'color-palette'
  for (let i = 0; i < 4; i += 1) {
    let newColor = document.createElement('div');
    newColor.className = 'color';
    newColor.style.backgroundColor = colors[i];
    selectColorPalette.appendChild(newColor);
  }
};
