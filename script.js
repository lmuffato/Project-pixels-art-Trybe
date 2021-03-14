function palette () {
const paletteColors = document.getElementById('color-palette');
for (let index = 0; index < 4; index += 1){
let colorsPalette = document.createElement('div');
colorsPalette.className = 'color';
paletteColors.appendChild(colorsPalette);
}
}
palette();