function criaPaleta(numberOfFrames) {
  for (let index = 0; index < numberOfFrames; index += 1) {
    const recuperaPaleta = document.getElementById('color-palette');
    const criaDivPaleta = document.createElement('div');
    criaDivPaleta.className = 'color';
    recuperaPaleta.appendChild(criaDivPaleta);
  }
}
criaPaleta(4);

// Seleciona a cor na paleta de cima

let qualCor = '';

function selectBlack() {
  document.getElementsByClassName('color')[0].classList.add('selected');
  document.getElementsByClassName('color')[1].className = 'color';
  document.getElementsByClassName('color')[2].className = 'color';
  document.getElementsByClassName('color')[3].className = 'color';

  qualCor = 'black';
  console.log('preto selecionado');
}
function selectOrange() {
  document.getElementsByClassName('color')[1].classList.add('selected');
  document.getElementsByClassName('color')[0].className = 'color';
  document.getElementsByClassName('color')[2].className = 'color';
  document.getElementsByClassName('color')[3].className = 'color';
  qualCor = 'orange';
}
function selectOlive() {
  document.getElementsByClassName('color')[2].classList.add('selected');
  document.getElementsByClassName('color')[1].className = 'color';
  document.getElementsByClassName('color')[0].className = 'color';
  document.getElementsByClassName('color')[3].className = 'color';
  qualCor = 'olive';
}
function selectBlue() {
  document.getElementsByClassName('color')[3].classList.add('selected');
  document.getElementsByClassName('color')[1].className = 'color';
  document.getElementsByClassName('color')[2].className = 'color';
  document.getElementsByClassName('color')[0].className = 'color';
  qualCor = 'blue';
}

window.onload = selectBlack();

document.getElementsByClassName('color')[0].addEventListener('click', selectBlack);
document.getElementsByClassName('color')[1].addEventListener('click', selectOrange);
document.getElementsByClassName('color')[2].addEventListener('click', selectOlive);
document.getElementsByClassName('color')[3].addEventListener('click', selectBlue);

function colorePaletaSuperior() {
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
  document.getElementsByClassName('color')[1].style.backgroundColor = 'orange';
  document.getElementsByClassName('color')[2].style.backgroundColor = 'olive';
  document.getElementsByClassName('color')[3].style.backgroundColor = 'blue';
}
colorePaletaSuperior();

function estouClicado() {
  const clicado = document.getElementsByClassName('pixel');
  for (let index = 0; index < clicado.length; index += 1) {
    clicado[index].classList.add('selected');
  }
}

function colore() {
  const doc = document.getElementsByClassName('pixel');
  doc[0].style.backgroundColor = qualCor;
}

function criaQuadro(numberOfFrames) {
  for (let index = 0; index < numberOfFrames * numberOfFrames; index += 1) {
    const criaDiv = document.createElement('div');
    criaDiv.className = 'pixel';
    const pegaDiv = document.getElementById('pixel-board');
    pegaDiv.append(criaDiv);
    criaDiv.addEventListener('click', estouClicado);
    criaDiv.addEventListener('click', colore);
  }
}
criaQuadro(5);

// Funções para Botao Limpar

function limpaTudo() {
  const doc = document.getElementsByClassName('pixel');
  for (let index = 0; index < doc.length; index += 1) {
    doc[index].style.backgroundColor = 'white';
  }
}

function botaoLimpar() {
  const bt = document.createElement('button');
  bt.id = 'clear-board';
  bt.innerHTML = 'Limpar';
  document.getElementById('espacoDoBotao').appendChild(bt);
  bt.addEventListener('click', limpaTudo);
}
botaoLimpar();