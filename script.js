function criaPaleta(numberOfFrames) {
  for (let index = 0; index < numberOfFrames; index += 1) {
    const recuperaPaleta = document.getElementById('color-palette');
    const criaDivPaleta = document.createElement('div');
    criaDivPaleta.className = 'color';
    recuperaPaleta.appendChild(criaDivPaleta);
  }
}
criaPaleta(4);

// Setando a Classe 'selected' nas cores da paleta de cima

let qualCor = 'black';

function selectBlack() {
  document.getElementsByClassName('color')[0].classList.add('selected');
  document.getElementsByClassName('color')[1].className = 'color';
  document.getElementsByClassName('color')[2].className = 'color';
  document.getElementsByClassName('color')[3].className = 'color';
  qualCor = 'black';
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

document.getElementsByClassName('color')[0].addEventListener('click', selectBlack);
document.getElementsByClassName('color')[1].addEventListener('click', selectOrange);
document.getElementsByClassName('color')[2].addEventListener('click', selectOlive);
document.getElementsByClassName('color')[3].addEventListener('click', selectBlue);

// Setando a cor da paleta superior

function colorePaletaSuperior() {
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
  document.getElementsByClassName('color')[1].style.backgroundColor = 'orange';
  document.getElementsByClassName('color')[2].style.backgroundColor = 'olive';
  document.getElementsByClassName('color')[3].style.backgroundColor = 'blue';
}
colorePaletaSuperior();

function colore() {
  const doc = document.getElementsByClassName('pixel');
  for (let index = 0; index < doc.length; index += 1) {
    doc[index].style.backgroundColor = qualCor;
  }
}

function criaQuadro(numberOfFrames) {
  for (let index = 0; index < numberOfFrames * numberOfFrames; index += 1) {
    const criaDiv = document.createElement('div');
    criaDiv.className = 'pixel';
    const pegaDiv = document.getElementById('pixel-board');
    pegaDiv.append(criaDiv);
    criaDiv.addEventListener('click', colore);
  }
}
criaQuadro(5);

// Funções para Botao Limpar

function limpaTudo() {
  let doc = document.getElementsByClassName('pixel');
  for (let index = 0; index < doc; index += 1) {
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
