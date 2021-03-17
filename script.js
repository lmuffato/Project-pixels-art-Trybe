// Requisito 7 //desenvolvido com ajuda dos colegas Patrick Morais, Nilson Ribeiro e Rafael Cardoso
function clearSelected() {
  const colorSelected = document.querySelector('.selected');
  colorSelected.classList.remove('selected');
}

function selectColor() {
  const changeColor = document.querySelector('#color-palette');

  changeColor.addEventListener('click', (e) => {
    clearSelected();
    e.target.classList.add('selected');
  });
}

// Requisito 8 //desenvolvido com ajuda do colega Lucas Pedroso
function paintColor() {
  const paintBox = document.getElementById('pixel-board');

  paintBox.addEventListener('click', (e) => {
    e.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  });
}

// Requisito 9
function clearBoard() {
  const clearAll = document.getElementById('clear-board');

  clearAll.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}

selectColor();
paintColor();
clearBoard();
