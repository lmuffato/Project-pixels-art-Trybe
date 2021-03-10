window.onload = function() {
  const coloPalete = document.getElementById('color-palette');
  
  const caixaBlack = document.querySelector('.preto');
  const caixaRed = document.querySelector('.vermelho');
  const caixaBlue = document.querySelector('.azul');
  const caixaGreen = document.querySelector('.verde');

  //let caixasTD = document.getElementsByClassName('pixel');
  //console.log(coloPalete);
  
  caixaBlack.addEventListener('click', caixaPreta);

  function caixaPreta() {
    caixaBlack.classList.add('selected');
    caixaRed.classList.remove('selected');
    caixaBlue.classList.remove('selected');
    caixaGreen.classList.remove('selected');
  }
  
  caixaRed.addEventListener('click', caixaVermelha);
  
  function caixaVermelha() {
    caixaRed.classList.add('selected');
    caixaBlack.classList.remove('selected');
    caixaBlue.classList.remove('selected');
    caixaGreen.classList.remove('selected');
  }

  caixaBlue.addEventListener('click', caixaAzul);
  
  function caixaAzul() {
    caixaBlue.classList.add('selected');
    caixaBlack.classList.remove('selected');
    caixaRed.classList.remove('selected');
    caixaGreen.classList.remove('selected');
  }

  caixaGreen.addEventListener('click', caixaVerde);
  
  function caixaVerde() {
    caixaGreen.classList.add('selected');
    caixaBlack.classList.remove('selected');
    caixaBlue.classList.remove('selected');
    caixaRed.classList.remove('selected');
  }










}
