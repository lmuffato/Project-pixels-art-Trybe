const paletteColors = document.querySelectorAll('.color');
const colors = ['black', 'red', 'blue', 'green'];

paletteColors[0].className += ' selected';

for (let indexPalette = 0; indexPalette < paletteColors.length; indexPalette += 1) {
  paletteColors[indexPalette].style.backgroundColor = colors[indexPalette];
}

function removeSelected() {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
}

function selectColor() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].addEventListener('click', function(){
      removeSelected()
      paletteColors[index].className = 'color selected';
      const colorSelected = paletteColors[index].style.backgroundColor;
      return colorSelected;
    });
  }
}

selectColor();
