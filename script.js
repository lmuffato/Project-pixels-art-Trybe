let corAtual = 'black';

function selecionaPreto() {
  document.getElementById('cor-preto').classList.add('selected');
  document.getElementById('cor-laranja').classList.remove('selected');
  document.getElementById('cor-azul').classList.remove('selected');
  document.getElementById('cor-marrom').classList.remove('selected');
  corAtual = 'black';
}

function selecionaLaranja() {
  document.getElementById('cor-laranja').classList.add('selected');
  document.getElementById('cor-preto').classList.remove('selected');
  document.getElementById('cor-azul').classList.remove('selected');
  document.getElementById('cor-marrom').classList.remove('selected');
  corAtual = 'orange';
}

function selecionaAzul() {
  document.getElementById('cor-azul').classList.add('selected');
  document.getElementById('cor-preto').classList.remove('selected');
  document.getElementById('cor-laranja').classList.remove('selected');
  document.getElementById('cor-marrom').classList.remove('selected');
  corAtual = 'blue';
}

function selecionaMarrom() {
  document.getElementById('cor-marrom').classList.add('selected');
  document.getElementById('cor-preto').classList.remove('selected');
  document.getElementById('cor-laranja').classList.remove('selected');
  document.getElementById('cor-azul').classList.remove('selected');
  corAtual = 'rgb(102, 66, 40)';
}

// Aprendi essa função no site https://stackoverflow.com/questions/4825295/javascript-onclick-to-get-the-id-of-the-clicked-button
// Foi muito complicado entender o "this.id" e o "clicked_id", mas consegui!
function pintarPixel(clicked_id) {
  document.getElementById(clicked_id).style.backgroundColor = corAtual;
}

function apagarTudo() {
  const borracha = document.getElementsByClassName('pixel');
  for (let index = 0; index < borracha.length; index += 1) {
    borracha[index].style.backgroundColor = 'white';
  }
}
