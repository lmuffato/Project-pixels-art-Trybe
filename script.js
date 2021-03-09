let colorsArray = ['red', 'blue', 'green', 'magenta'];

let colorPaletteContainers = document.querySelectorAll('.color');

colorPaletteContainers.forEach(addColorsInPalette)

function addColorsInPalette() {
  for (let index = 0; index < colorPaletteContainers.length; index += 1) {
    colorPaletteContainers[index].style.background = colorsArray[index];
  }
}