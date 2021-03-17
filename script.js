function createPalettes(num) {
  for (index = 0; index < num; index+=1) {
    const palettes = document.createElement('div');
    const allPalettes = document.getElementById('color-palette');
    allPalettes.appendChild(palettes);
    palettes.className = 'color';
  }
}
createPalettes(4);

function paletteColor(){

    const pColor = document.getElementsByClassName('color');
    pColor[0].style.backgroundColor = 'black';
    pColor[1].style.backgroundColor = 'green';
    pColor[2].style.backgroundColor = 'yellow';
    pColor[3].style.backgroundColor = 'blue';

}
paletteColor();