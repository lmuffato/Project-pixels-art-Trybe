const paletteColors = document.querySelectorAll('#color-palette .color');

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
  colorElement.onclick = selectColor;
}
