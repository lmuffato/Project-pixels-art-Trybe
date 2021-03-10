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
