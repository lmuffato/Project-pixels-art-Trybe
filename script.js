const paletteColor = document.querySelector('#color-palette');
const elementTable = document.querySelector('#pixel-board');
const colorBlack = paletteColor.children[0];
const colorBlue = paletteColor.children[1];
const colorBrown = paletteColor.children[2];
const colorAqua = paletteColor.children[3];
const element = document.querySelectorAll('.color');
const buttonClear = document.querySelector('#clear-board');
const inputGenerator = document.querySelector('#board-size');
const buttonVqv = document.querySelector('#generate-board');

colorBlack.style.backgroundColor = 'black';
colorBlue.style.backgroundColor = 'blue';
colorBrown.style.backgroundColor = 'brown';
colorAqua.style.backgroundColor = 'aqua';

const generateScreen = (value) => {
  for (let index = 0; index < value; index += 1) {
    const createElement = document.createElement('div');
    elementTable.appendChild(createElement);
    for (let counter = 0; counter < value; counter += 1) {
      const createElementL = document.createElement('div');
      createElementL.className = 'pixel';
      createElement.appendChild(createElementL);
    }
  }
};
generateScreen(5);

const generatorQuad = () => {
  if (inputGenerator.value === '') {
    alert('Board inválido!');
  } else if (inputGenerator.value < 5) {
    inputGenerator.value = 5;
    generateScreen(5);
  } else if (inputGenerator.value > 50) {
    inputGenerator.value = 5;
    generateScreen(50);
  }
  elementTable.innerHTML = '';
  generateScreen(inputGenerator.value);
};
buttonVqv.addEventListener('click', generatorQuad);

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
// https://pt.stackoverflow.com/questions/441373/como-remover-todos-os-elementos-de-uma-div-em-javascript#:~:text=Para%20remover%20de%20uma%20s%C3%B3,do%20elemento%20pelo%20valor%20fornecido.
