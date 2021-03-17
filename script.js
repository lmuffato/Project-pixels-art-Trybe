function createPalettes(num) {
  for (index = 0; index < num; index+=1) {
    const palettes = document.createElement('div');
    const allPalettes = document.getElementById('color-palette');
    allPalettes.appendChild(palettes);
    palettes.className = 'color';
  }
}
createPalettes(20);

// function paletteColor(){

// }