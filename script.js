let corAtual = '';

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
