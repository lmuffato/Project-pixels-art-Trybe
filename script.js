// reqisito 9
function limpaTela() {
let clean = document.getElementById('clear-board');
let pixels = document.getElementsByClassName('pixel');
clean.addEventListener('click', () => {
    pixels.style.backgroundColor = "white";
  } 
})