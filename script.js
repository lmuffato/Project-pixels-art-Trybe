const paletteColor = document.querySelector('#color-palette');
const colorBlack = paletteColor.children[0];
const colorBlue = paletteColor.children[1];
const colorBrown = paletteColor.children[2];
const colorAqua = paletteColor.children[3];
const element = document.querySelectorAll('.color');
const buttonClear = document.querySelector('#clear-board');
const inputGenerator = document.querySelector('#board-size');
const buttonVqv = document.querySelector('#generator-board');

colorBlack.style.backgroundColor = 'black';
colorBlue.style.backgroundColor = 'blue';
colorBrown.style.backgroundColor = 'brown';
colorAqua.style.backgroundColor = 'aqua';

const generateScreen = (value) => {
  const elementTable = document.querySelector('#pixel-board');
  for (let index = 0; index < value; index += 1) {
    const createElement = document.createElement('div');
    elementTable.appendChild(createElement);
    for (let counter = 0; counter < value; counter += 1) {
      const createElementL = document.createElement('div');
      createElement.appendChild(createElementL);
      createElementL.className = 'pixel';
    }
  }
};

const generatorQuad = () => {
  const inputValue = inputGenerator.value;
  if (inputValue === '') {
    alert('Board inválido!');
    alert('Adicione um número entre 5 e 50');
  }
  return generateScreen(inputValue);
};

const eventButton = () => {
  buttonVqv.addEventListener('click', generatorQuad);
};

eventButton();

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
    event.target.style.backgroundColor = getComputedStyle(
      classSelected
    ).backgroundColor;
  }
}
elementTable.addEventListener('click', pressColor);

function boardClear() {
  buttonClear.addEventListener('click', () => {
    const divPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < divPixel.length; index += 1) {
      divPixel[index].style.backgroundColor = '#fff';
    }
  });
}
boardClear();

// referencias: https://backefront.com.br/adicionar-classe-js-puro/, https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener, https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
