function criaPaleta(numberOfFrames) {
  for (let index = 0; index < numberOfFrames; index += 1) {
    const pegaPaleta = document.getElementById('color-palette');
    const criaPaleta = document.createElement('div');
    criaPaleta.className = 'color';
    pegaPaleta.appendChild(criaPaleta);
  }
}
criaPaleta(4);

function colorePaletaSuperior() {
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
  document.getElementsByClassName('color')[1].style.backgroundColor = 'orange';
  document.getElementsByClassName('color')[2].style.backgroundColor = 'olive';
  document.getElementsByClassName('color')[3].style.backgroundColor = 'blue';
}
colorePaletaSuperior();

function criaQuadro(numberOfFrames) {
  for (let index = 0; index < numberOfFrames * numberOfFrames; index += 1) {
    const criaDiv = document.createElement('div');
    criaDiv.className = 'pixel';
    const pegaDiv = document.getElementById('pixel-board');
    pegaDiv.append(criaDiv);
  }
}
criaQuadro(5);

// Funções para Criar os Eventos de Mouse

function limpaTudo() {
  document.getElementsByClassName('pixel').style.backgroundColor = 'white';
}

function botaoLimpar() {
  let bt = document.createElement("button");
  bt.id = 'clear-board';
  bt.innerHTML = 'Limpar';
  document.getElementById('espacoDoBotao').appendChild(bt);
  bt.addEventListener('click', limpaTudo);
}
botaoLimpar();
