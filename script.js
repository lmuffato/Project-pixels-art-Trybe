// - A `classe` `selected` deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

// - Somente uma das cores da paleta deve ter a `classe` `selected` de cada vez;

// - Note que os elementos que deverão receber a classe `selected` devem ser os mesmos elementos que possuem a classe `color`, como especificado no **requisito 2**.

const colorPalettes = document.getElementsByClassName('color');

function removeSelected(value) {
  for (let index = 0; index < colorPalettes.length; index += 1) {
    if (value !== colorPalettes[index]) {
      colorPalettes[index].classList.remove('selected');
    }
  }
}

function clickedElement() {
  this.classList.add('selected');
  removeSelected(this);
}

for (let i = 0; i < colorPalettes.length; i += 1) {
  colorPalettes[i].addEventListener('click', clickedElement, true);
}
