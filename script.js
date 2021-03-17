function createPalettes(num) {
  for (let index = 0; index < num; index += 1) {
    const palettes = document.createElement('div');
    const allPalettes = document.getElementById('color-palette');
    allPalettes.appendChild(palettes);
    palettes.className = 'color';
  }
}
createPalettes(4);

function paletteColor() {
  const pColor = document.getElementsByClassName('color');
  pColor[0].style.backgroundColor = 'black';
  pColor[1].style.backgroundColor = 'green';
  pColor[2].style.backgroundColor = 'yellow';
  pColor[3].style.backgroundColor = 'blue';
  pColor[0].classList.add('selected');
}
paletteColor();

function createPixels() {
  const pixelBox = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    const pixelC = document.createElement('div');
    pixelBox.appendChild(pixelC);
    for (let indexx = 0; indexx < 5; indexx += 1) {
      const pixelL = document.createElement('div');
      pixelC.appendChild(pixelL);
      pixelL.className = 'pixel';
    }
  }
}

createPixels();