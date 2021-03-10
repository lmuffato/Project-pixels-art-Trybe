const pegaIdPrimeiraSection = document.querySelector('#color-palette');
pegaIdPrimeiraSection.firstElementChild.classList.add('selected');

function selecionaCorPixel() {
  pegaIdPrimeiraSection.addEventListener('click', function eventoDeClick(event) {
    if (event.target.className === 'color') {
      document.querySelector('.selected').classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}
selecionaCorPixel();

function pintarPixel() {
  const pegarBoard = document.querySelector('#pixel-board');
  pegarBoard.addEventListener('click', function pintando(event) {
    if (event.target.className === 'pixel') {
      const pegaSelected = document.querySelector('.selected');
      const color = getComputedStyle(pegaSelected).getPropertyValue('background-color');
      event.target.style.backgroundColor = color;
    }
  });
}
pintarPixel();
