const colorPalette = document.getElementById('color-palette');

function createPaletteBlocks() {
  for (let index = 0; index <= 3; index += 1) {
    const paletteBlocks = document.createElement('div');
    paletteBlocks.className = 'color';
    colorPalette.appendChild(paletteBlocks);
  }
}

createPaletteBlocks();

function blockColor() {
  let colorBlock = document.getElementsByClassName('color');
  colorBlock[0].style.backgroundColor = 'black';
  for (let index = 1; index < colorBlock.length; index += 1) {
      colorBlock[index].style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  }
}

blockColor();
