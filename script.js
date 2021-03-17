function createColorPalette(qnt) {
  for (let index = 0; index < qnt; index += 1) {
    const square = document.createElement('div');
    const Palette = document.getElementById('color-palette');
    Palette.appendChild(square);
    square.className = 'color';
  }
}

createColorPalettes(4);

function paletteColor() {
    const palleteColor = document.getElementsByClassName('color');
    palleteColor[0].style.backgroundColor = 'black';
    palleteColor[1].style.backgroundColor = 'orange';
    palleteColor[2].style.backgroundColor = 'purple';
    palleteColor[3].style.backgroundColor = 'green';
}
paletteColor();
