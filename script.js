window.onload = function main() {
  const paletteColors = document.querySelectorAll('.color');
  const colors = ['black', 'red', 'blue', 'green'];

  for (let indexPalette = 0; indexPalette < paletteColors.length; indexPalette += 1) {
    paletteColors[indexPalette].style.backgroundColor = colors[indexPalette];
  }
};
