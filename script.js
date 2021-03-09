function createColorPalette(colors) {
  const headBox = document.querySelectorAll('.color'); // Busca as caixas de cores no html

  for (let index = 0; index < headBox.length; index += 1) {
    headBox[index].style.backgroundColor = colors[index];
  }
}
createColorPalette(['black', 'blue', 'red', 'yellow']);
