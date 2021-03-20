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

function geradorCores (){
//const cores = document.getElementsByClassName('color');
//for ( let index = 1; index <= color.length; index += 1) {
let r = Math.random() * 255;
let g = Math.random() * 255;
let b = Math.random() * 255;
return `rgb(${r}, ${g}, ${b})`;
//const rgb = `rgb(${r}, ${g}, ${b})`;
//color[index].style.backgroundColor = rgb;
  //}
}