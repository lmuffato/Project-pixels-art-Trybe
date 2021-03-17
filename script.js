const paletteColor = document.querySelector('#color-palette');
const elementTable = document.querySelector('#pixel-board');
const colorBlack = paletteColor.children[0];
const colorBlue = paletteColor.children[1];
const colorBrown = paletteColor.children[2];
const colorAqua = paletteColor.children[3];
const element = document.querySelectorAll('.color');
const buttonClear = document.querySelector('#clear-board');

// adicionando cores a paleta de cores
colorBlack.style.backgroundColor = 'black';
colorBlue.style.backgroundColor = 'blue';
colorBrown.style.backgroundColor = 'brown';
colorAqua.style.backgroundColor = 'aqua';

// criando tabela
for (let index = 0; index < 25; index += 1) {
  const elementDiv = document.createElement('div');
  elementDiv.className = 'pixel';
  elementTable.appendChild(elementDiv);
}

function addEvent(event) {
  const classSelected = document.querySelector('.selected');
  classSelected.classList.remove('selected');
  event.target.classList.add('selected');
}

for (let index = 0; index < element.length; index += 1) {
  element[index].addEventListener('click', addEvent);
}

function pressColor(event) {
  const classSelected = document.querySelector('.selected');
  if (event.target.className === 'pixel') {
    event.target.style.backgroundColor = getComputedStyle(classSelected).backgroundColor;
    console.log(event.target);
  }
}
elementTable.addEventListener('click', pressColor);

function boardClear() {
  buttonClear.addEventListener('click', () => {
    const divPixel = document.querySelectorAll('.pixel');
    for(let index = 0; index < divPixel.length; index += 1) {
      divPixel[index].style.backgroundColor = '#fff';
    }
  });
}
boardClear();

// referencias: https://backefront.com.br/adicionar-classe-js-puro/, https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
