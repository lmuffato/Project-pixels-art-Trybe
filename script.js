const paletteColors = document.querySelectorAll('.color');
const colors = ['black', 'red', 'blue', 'green'];
const pixels = document.querySelectorAll('.pixel');

paletteColors[0].className += ' selected';

for (let indexPalette = 0; indexPalette < paletteColors.length; indexPalette += 1) {
  paletteColors[indexPalette].style.backgroundColor = colors[indexPalette];
}

let colorSelected = document.querySelector('.selected').style.backgroundColor;

function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
}

function selectColor() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].addEventListener('click', function(){
      removeSelected();
      paletteColors[index].className = 'color selected';
      colorSelected = paletteColors[index].style.backgroundColor;
    });
  }
}

function paintPixel() {
  for (let indexPixel = 0; indexPixel < pixels.length; indexPixel += 1) {
    pixels[indexPixel].addEventListener('click', function(){
      pixels[indexPixel].style.backgroundColor = colorSelected;
    });
  }
}

selectColor();
paintPixel();
