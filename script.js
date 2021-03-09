let colorsArray = ['red', 'blue', 'green', 'magenta'];

let colorPaletteContainers = document.querySelectorAll('.color');

colorPaletteContainers.forEach(addColorsInPalette);

function addColorsInPalette() {
  for (let index = 0; index < colorPaletteContainers.length; index += 1) {
    colorPaletteContainers[index].style.background = colorsArray[index];
  }

  colorPaletteContainers[0].style.background = 'black';
}

for (let index = 0; index < 25; index += 1) {
  document.querySelector('#pixel-board').appendChild(createPixelInBoard())
}

function createPixelInBoard() {
  let pixel = document.createElement('container');
  pixel.className = 'pixel';
  return pixel;
}

colorPaletteContainers.forEach(el => el.addEventListener('click', e => selectNewElement(e.target)));

function selectNewElement(newEl) {
  colorPaletteContainers.forEach(el => el.classList.remove('selected'));
  newEl.classList.toggle('selected');
}