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

let qualCor = 'black';

function selectBlack() {
  document.getElementsByClassName('color')[0].classList.add('selected');
  document.getElementsByClassName('color')[1].className = 'color';
  document.getElementsByClassName('color')[2].className = 'color';
  document.getElementsByClassName('color')[3].className = 'color';
  qualCor = 'black';
  console.log('Black ativo');
}
function selectOrange() {
  document.getElementsByClassName('color')[1].classList.add('selected');
  document.getElementsByClassName('color')[0].className = 'color';
  document.getElementsByClassName('color')[2].className = 'color';
  document.getElementsByClassName('color')[3].className = 'color';
  qualCor = 'orange';
  console.log('Orange ativo');
}
function selectOlive() {
  document.getElementsByClassName('color')[2].classList.add('selected');
  document.getElementsByClassName('color')[1].className = 'color';
  document.getElementsByClassName('color')[0].className = 'color';
  document.getElementsByClassName('color')[3].className = 'color';
  qualCor = 'olive';
  console.log('Olive ativo');
}
function selectBlue() {
  document.getElementsByClassName('color')[3].classList.add('selected');
  document.getElementsByClassName('color')[1].className = 'color';
  document.getElementsByClassName('color')[2].className = 'color';
  document.getElementsByClassName('color')[0].className = 'color';
  qualCor = 'blue';
  console.log('Blue ativo');
}

window.onload = selectBlack;

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

function colore() {
  const selectedPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
    selectedPixel[index].addEventListener('click', () => {
      selectedPixel[index].style.backgroundColor = qualCor;
    });
  }
  console.log('funcao colore!');
}

function criaQuadro(quantosPixels) {
  for (let index = 0; index < quantosPixels * quantosPixels; index += 1) {
    const criaDiv = document.createElement('div');
    criaDiv.className = 'pixel';
    const pegaDiv = document.getElementById('pixel-board');
    pegaDiv.append(criaDiv);
    criaDiv.addEventListener('click', colore);
  }
  console.log('quadro criado');
}

// function clickDoBotao() {
//   const botao = document.getElementById('botaoTamanho');
//   botao.addEventListener('click', criaQuadro);
//   console.log('click do botao');
// }

criaQuadro(25);

// Funções para Botao Limpar

function criaBotaoLimpar() {
  const button = document.createElement('button');
  button.innerHTML = 'Limpar';
  document.getElementById('espacoDoBotao').appendChild(button);
  button.addEventListener('click', () => {
    for (let index = 0; index < document.getElementsByClassName('pixel').length; index += 1) {
      document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
    }
  });
}

criaBotaoLimpar();
