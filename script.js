const colorPalette = document.getElementById('color-palette');
const pixelLines = document.getElementById('pixel-board');
const pixelSpaces = document.getElementsByClassName('lines');
const colorBlock = document.getElementsByClassName('color');



function createPaletteBlocks() {
  for (let index = 0; index <= 3; index += 1) {
    const paletteBlocks = document.createElement('div');
    paletteBlocks.className = 'color';
    colorPalette.appendChild(paletteBlocks);
  }
}

createPaletteBlocks();

function blockColor() {
  let firstblock = colorBlock[0]
  firstblock.style.backgroundColor = 'black';
  firstblock.className = "color selected"
  for (let index = 1; index < colorBlock.length; index += 1) {
    colorBlock[index].style.backgroundColor = (
    `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`);
  }
}

blockColor();

function pixelBoard() {

  for (let indexLine = 0; indexLine <= 4; indexLine += 1) {
    const pixelLine = document.createElement('div');
    pixelLine.className = 'lines';
    pixelLines.appendChild(pixelLine);

    for (let index = 0; index <= 4; index += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixelSpaces[indexLine].appendChild(pixel);
    }
  }
}
pixelBoard();


console.log(colorPalette.addEventListener("click",selectPixel))

function selectPixel(colorChoose) {
    const colorClass = colorChoose.target.className;
  if (colorClass.indexOf("selected") > 0 && colorClass.indexOf("color") > 0 ) {
    colorChoose.className ="color selected"
    } else {
    for(let index = 0; index < colorBlock.length; index += 1){
        colorBlock[index].className = "color" }

    colorChoose.target.className += " selected"
    console.log(colorChoose.target)
    }
}


