console.log('começou a rodar o javaScript');
function montPalette (paletteToBeMonted, tableColors) {
  for (let color = 0; color < tableColors.length; color += 1) {
    paletteToBeMonted[color].style.backgroundColor = tableColors[color];
  }    
}
let palette = document.getElementsByClassName('color');
let simpleColors = ['#800000', '#ff0000', '#999966', '#ffff00 ', '#009900', '#00ff00', '#008080', '#00ffff', '#000080', '#0000ff', '#800080', '#ff00ff'];
montPalette(palette, simpleColors);
