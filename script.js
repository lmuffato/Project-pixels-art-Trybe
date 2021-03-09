const paletteColors = document.querySelectorAll('#color-palette .color');

const colors = {
  black: 'black',
  red: '#f72c25',
  green: '#2d936c',
  blue: '#4f7cac',
};

function setColorPalette(element) {
  const colorOption = element;
  if (colors[colorOption.id]) {
    colorOption.style.backgroundColor = colors[colorOption.id];
  }
}

function selectColor(element) {
  for (let index = 0; index < paletteColors.length; index += 1) {
    const color = paletteColors[index];
    if (color.classList.contains('selected')) {
      color.classList.remove('selected');
    }
  }

  element.target.classList.add('selected');
}

for (let index = 0; index < paletteColors.length; index += 1) {
  const colorElement = paletteColors[index];
  setColorPalette(colorElement);
  colorElement.onclick = selectColor;
}
