let selectColorPalette = document.getElementById('color-palette');
let selectPixelBoard = document.getElementById('pixel-board');
let colors = ['black', 'red', 'blue', 'green'];

createPalette(); // cria os 4 quadrados(cores) e os adiciona como filho da div de id = 'color-palette'
createBoardPixel(); //cria os nxn quadrados.

window.onload = function() {
  let setSelected = selectColorPalette.firstElementChild;
  setSelected.className = 'color selected';
}

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
