window.onload = function main() {
  const paletteColors = document.querySelectorAll('.color');
  const colors = ['black', 'red', 'blue', 'green'];

  paletteColors[0].className += ' selected';

  for (let indexPalette = 0; indexPalette < paletteColors.length; indexPalette += 1) {
    paletteColors[indexPalette].style.backgroundColor = colors[indexPalette];
  }
};
