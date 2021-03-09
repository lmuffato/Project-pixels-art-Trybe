console.log('começou a rodar o javaScript');

const palette = document.getElementsByClassName('color');
const simpleColors = ['#000000', '#800000', '#ff0000', '#999966', '#ffff00 ', '#009900', '#00ff00', '#008080', '#00ffff', '#000080', '#0000ff', '#800080', '#ff00ff'];
const pixels = document.getElementsByClassName('pixel');
const buttonClear = document.getElementById('clear-board');
let colorSelected = document.querySelector('.selected');

function montPalette(tableColors) {
  for (let color = 0; color < tableColors.length; color += 1) {
    palette[color].style.backgroundColor = tableColors[color];
  }
}

function selectColor(event) {
  if (event.target !== colorSelected) {
    colorSelected.className = 'color';
    colorSelected = event.target;
    colorSelected.className = 'color selected';
  }
}

function colorPixel(event) {
  if (event.target.style.backgroundColor !== colorSelected.style.backgroundColor) {
    event.target.style.backgroundColor = colorSelected.style.backgroundColor;
  }
}

function clearBoard() {
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = 'white';
  }
}

for (let color = 0; color < palette.length; color += 1) {
  palette[color].addEventListener('click', selectColor);
}

for (let pixel = 0; pixel < pixels.length; pixel += 1) {
  pixels[pixel].addEventListener('click', colorPixel);
}

buttonClear.addEventListener('click', clearBoard);

palette[1].addEventListener('click', selectColor);
console.log('depois');
montPalette(simpleColors);
