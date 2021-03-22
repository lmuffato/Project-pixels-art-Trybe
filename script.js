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

function clear() {
  const buttonClear = document.getElementById('clear-board');
  buttonClear.addEventListener('click',function () {
    for (let indexClear = 0; indexClear < pixels.length; indexClear += 1) {
      pixels[indexClear].style.backgroundColor = 'white';
  }
  });  
}


selectColor();
paintPixel();
clear();
