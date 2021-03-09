// const colorPalette = document.getElementById('color-palette');
const colorDivs = document.querySelectorAll('.color');

const paletteColors = ['black', 'blue', 'red', 'green'];

function setPaletteColors() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    const colorDiv = colorDivs[index];
    const currentColor = paletteColors[index];

    colorDiv.style.backgroundColor = currentColor;
  }
}

setPaletteColors();
