const colorsArray = ['red', 'blue', 'green', 'magenta'];

const colorPaletteContainers = document.querySelectorAll('.color');

function addColorsInPalette() {
  for (let index = 0; index < colorPaletteContainers.length; index += 1) {
    colorPaletteContainers[index].style.background = colorsArray[index];
  }

  colorPaletteContainers[0].style.background = 'black';
}

function createPixelInBoard() {
  const pixel = document.createElement('container');
  pixel.className = 'pixel';
  return pixel;
}

function selectNewElement(newEl) {
  colorPaletteContainers.forEach((el) => el.classList.remove('selected'));
  newEl.classList.toggle('selected');
}

colorPaletteContainers.forEach(addColorsInPalette);

for (let index = 0; index < 25; index += 1) {
  document.querySelector('#pixel-board').appendChild(createPixelInBoard());
}

colorPaletteContainers.forEach((el) => el.addEventListener('click', (e) => selectNewElement(e.target)));
