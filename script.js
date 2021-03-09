// Selecina os elementos da paleta de cor, cria um EventListener de "Click" pra cada uma deles, e chama a função "addSelected" que remove a class "selected" de todos elementos, e em seguida adiciona a mesma classe somente no elemento clicado
const colorSelector = document.querySelectorAll('.color');

for (let index = 0; index < colorSelector.length; index += 1) {
  colorSelector[index].addEventListener('click', addSelected);
}

function addSelected(event) {
  for (let i = 0; i < colorSelector.length; i += 1) {
    colorSelector[i].classList.remove('selected');
  }
  event.currentTarget.classList.add('selected');
}

const selectPixels = document.querySelectorAll('.pixel');

for (let i = 0; i < selectPixels.length; i += 1) {
  selectPixels[i].addEventListener('click', addColor);
}

const selectBlack = document.querySelector('.black');
const selectPurple = document.querySelector('.purple');
const selectGreen = document.querySelector('.lightgreen');
const selectPink = document.querySelector('.pink');

function addColor(event) {
  for (let i = 0; i < colorSelector.length; i += 1) {
    event.currentTarget.classList.remove(
      'white',
      'black',
      'purple',
      'lightgreen',
      'pink'
    );

    if (selectBlack.classList.contains('selected')) {
      event.currentTarget.classList.add('black');
    }

    if (selectPurple.classList.contains('selected')) {
      event.currentTarget.classList.add('purple');
    }
    if (selectGreen.classList.contains('selected')) {
      event.currentTarget.classList.add('lightgreen');
    }

    if (selectPink.classList.contains('selected')) {
      event.currentTarget.classList.add('pink');
    }
  }
}
