/* eslint-disable no-param-reassign */
const pixelBoard = document.getElementById('pixel-board'); // variaveis

for (let index = 0; index < 5; index += 1) { // aqui esta sendo gerada a tabela de 5x5
  const line = document.createElement('div');
  line.className = 'line';
  pixelBoard.appendChild(line);
  for (let index2 = 0; index2 < 5; index2 += 1) {
    const lineInside = document.createElement('div');
    lineInside.className = 'pixel';
    line.appendChild(lineInside);
  }
}

const clickinColor = document.getElementsByClassName('color'); // aqui estq sendo criado o click

for (let index = 0; index < clickinColor.length; index += 1) {
  // eslint-disable-next-line no-use-before-define
  clickinColor[index].addEventListener('click', removeSelect);
}
function removeSelect(e) {
  const remove = document.getElementsByClassName('selected'); // aqui remove o select de todas as classes (peguei de exemplo do Luiz Putinatti)
  remove[0].classList.remove('selected');

  const recebeEvento = e.target;
  recebeEvento.classList.add('selected');
}

// guarda a cor do selected

// eslint-disable-next-line no-unused-vars
const saveColorSelected = document.querySelector('.selected').style.backgroundColor;

// incluir o click nos pixel

const clickp = document.getElementsByClassName('.pixel');
for (let index = 0; index < clickp.length; index += 1) {
  // eslint-disable-next-line no-undef
  // eslint-disable-next-line no-use-before-define
  clickp[index].addEventListener('click', clickPixel);
}

// função clicar pixel
function clickPixel(evento) {
  const eventoRecebido = evento.target;
  eventoRecebido.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}
