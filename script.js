const black = document.querySelectorAll('.color')[0];
black.className += ' selected';
window.onload = black;
const red = document.querySelectorAll('.color')[1];
const blue = document.querySelectorAll('.color')[2];
const green = document.querySelectorAll('.color')[3];

black.style.backgroundColor = 'black';
red.style.backgroundColor = 'red';
blue.style.backgroundColor = 'darkblue';
green.style.backgroundColor = 'darkgreen';

// Requisito 07
function trocaCor(evento) {
  const elementos = document.querySelectorAll('.color');
  for (let index = 0; index < elementos.length; index += 1) {
    if (elementos[index].classList === 'selected');
    elementos[index].classList.remove('selected');
  }
  evento.target.classList.add('selected');
}

const select = document.getElementById('color-palette');
select.addEventListener('click', trocaCor);

// Requisito 08

const caixas = document.querySelectorAll('#pixel');
caixas.addEventListener('click', pintar);

function pintar(evento) {
  evento.target.style.backgroundColor = select.classList('.selected').style.backgroundColor;
}