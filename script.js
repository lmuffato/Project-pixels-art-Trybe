// Requisito 12
// Solução obtida e adaptada de: https://wallacemaxters.com.br/blog/2021/02/20/como-gerar-cores-aleatorias-no-javascript
function geradorCores (){
  let r = Math.random() * 255;
  let g = Math.random() * 255;
  let b = Math.random() * 255;
  return `rgb(${r}, ${g}, ${b})`;
  }

const black = document.querySelectorAll('.color')[0];
black.className += ' selected';
window.onload = black;
const red = document.querySelectorAll('.color')[1];
const blue = document.querySelectorAll('.color')[2];
const green = document.querySelectorAll('.color')[3];

black.style.backgroundColor = 'black';
red.style.backgroundColor = geradorCores();
blue.style.backgroundColor = geradorCores();
green.style.backgroundColor = geradorCores();

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

function colorir(evento) {
  const capturar = document.getElementsByClassName('selected')[0];
  const corColorir = capturar.style.backgroundColor;
  evento.target.style.backgroundColor = corColorir;
}

const quadrados = document.getElementById('pixel-board');
quadrados.addEventListener('click', colorir);


// Requisito 09

function limpar(evento) {
  const caixas = document.getElementsByClassName('pixel');
  console.log(caixas);
  for (let index = 0; index < caixas.length; index += 1) {
    caixas[index].style.backgroundColor = 'white';
  }
}

const botao = document.querySelector('#clear-board');
botao.addEventListener('click', limpar);

//requisito 11
const size = document.getElementById('board-size');
const boto = document.getElementById('generate-board');
botao.addEventListener('click', teste);

function teste () {
  let n = size;
  if ( n < 5 && n !== '' ){
    n = 5;
  } else if ( n > 50 ){
    n = 50;
  } 
  return n;
}

