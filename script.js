const colorPalette = document.getElementById('color-palette');
const pixelLines = document.getElementById('pixel-board');
let pixelSpaces = document.getElementsByClassName('lines')


function createPaletteBlocks() {
  for (let index = 0; index <= 3; index += 1) {
    const paletteBlocks = document.createElement('div');
    paletteBlocks.className = 'color';
    colorPalette.appendChild(paletteBlocks);
  }
}

createPaletteBlocks();

function blockColor() {
  const colorBlock = document.getElementsByClassName('color');
  colorBlock[0].style.backgroundColor = 'black';
  for (let index = 1; index < colorBlock.length; index += 1) {
    colorBlock[index].style.backgroundColor = 
    `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  }
}

blockColor();

function pixelBoard() {

  for (let indexLine = 0; indexLine <= 4; indexLine += 1){  
  const pixelLine = document.createElement('div')
  pixelLine.className = "lines"
  pixelLines.appendChild(pixelLine)
  
    for (let index = 0; index <= 4; index += 1){  
    let pixel = document.createElement('div')
    pixel.className = 'pixel'
    pixelSpaces[indexLine].appendChild(pixel)
    }
  }
}
pixelBoard()

