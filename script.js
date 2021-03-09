const paletteColors = document.querySelectorAll('#color-palette .color');

function selectColor(colorElement) {
  for (let index = 0; index < paletteColors.length; index += 1) {
    const color = paletteColors[index];
    if (color.classList.contains('selected')) {
      color.classList.remove('selected');
    }
  }

  colorElement.classList.add('selected');
}

for (let index = 0; index < paletteColors.length; index += 1) {
  const colorElement = paletteColors[index];
  colorElement.addEventListener('click', () => {
    selectColor(colorElement);
  });
}
