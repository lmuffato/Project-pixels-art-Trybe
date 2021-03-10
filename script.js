// - A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

// - Somente uma das cores da paleta deve ter a `classe` `selected` de cada vez;

// - Note que os elementos que deverão receber a classe `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

const colorPalettes = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
let selectedPalette = 'black';
function removeSelected(value) {
  for (let index = 0; index < colorPalettes.length; index += 1) {
    if (value !== colorPalettes[index]) {
      colorPalettes[index].classList.remove('selected');
    }
  }
}

function clickedPaletteElement() {
  this.classList.add('selected');
  selectedPalette = window
    .getComputedStyle(this)
    .getPropertyValue('background-color');
  removeSelected(this);
}

for (let index = 0; index < colorPalettes.length; index += 1) {
  colorPalettes[index].addEventListener('click', clickedPaletteElement);
}

function clickedPixelElement(event) {
  event.target.style.setProperty('background-color', selectedPalette);
}

for (let index = 0; index < pixels.length; index += 1) {
  pixels[index].addEventListener('click', clickedPixelElement);
}

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const clearButton = document.getElementById('clear-board');
clearButton.addEventListener('click', clearBoard);
