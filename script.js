/* eslint func-names: ["error", "never"] */

function jqueryHover() {
  $('.pixel').hover(function () {
    $(this).css('width', '43px');
    $(this).css('height', '43px');
  }, function () {
    $(this).css('width', '40px');
    $(this).css('height', '40px');
  });
}
/* Source: https://github.com/tryber/sd-010-a-project-pixels-art/pull/4/files */
function createPixels(n) {
  for (let index = 0; index < n; index += 1) {
    const createDiv = document.createElement('div');
    createDiv.className = 'line';
    createDiv.style.height = '40px';
    document.querySelector('#pixel-board').appendChild(createDiv);
    for (let jindex = 0; jindex < n; jindex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.width = '40px';
      pixel.style.height = '40px';
      pixel.style.backgroundColor = 'white';
      pixel.style.display = 'inline-block';
      pixel.style.border = 'solid black 1px';
      pixel.style.transition = '0.2s';
      jqueryHover();
      document.querySelectorAll('.line')[index].appendChild(pixel);
    }
  }
}
createPixels(5);

function firstColorSelected() {
  const color = document.querySelector('.color');
  color.classList.add('selected');
}

/**
 * Deu uma olhada no código do luanlsr e achei bem legal a forma como ele fez para remover a classe selected
 * resolvi implementa-lá no meu código. Github: https://github.com/tryber/sd-010-a-project-pixels-art/pull/15/files
 */
const elementOne = document.getElementsByClassName('color')[0];
const elementTwo = document.getElementsByClassName('color')[1];
const elementThree = document.getElementsByClassName('color')[2];
const elementFour = document.getElementsByClassName('color')[3];

function clickElementOne() {
  elementOne.classList.add('selected');
  elementTwo.classList.remove('selected');
  elementThree.classList.remove('selected');
  elementFour.classList.remove('selected');
}

function clickElementTwo() {
  elementOne.classList.remove('selected');
  elementTwo.classList.add('selected');
  elementThree.classList.remove('selected');
  elementFour.classList.remove('selected');
}

function clickElementThree() {
  elementOne.classList.remove('selected');
  elementTwo.classList.remove('selected');
  elementThree.classList.add('selected');
  elementFour.classList.remove('selected');
}

function clickElementFour() {
  elementOne.classList.remove('selected');
  elementTwo.classList.remove('selected');
  elementThree.classList.remove('selected');
  elementFour.classList.add('selected');
}

function selectColor() {
  elementOne.addEventListener('click', clickElementOne);
  elementTwo.addEventListener('click', clickElementTwo);
  elementThree.addEventListener('click', clickElementThree);
  elementFour.addEventListener('click', clickElementFour);
}

// Desafio 8
const colorOne = 'black';
const colorTwo = 'red';
const colorThree = 'blue';
const colorFour = 'green';

function palletClicked() {
  if (elementOne.classList.contains('selected')) {
    return colorOne;
  }

  if (elementTwo.classList.contains('selected')) {
    return colorTwo;
  }

  if (elementThree.classList.contains('selected')) {
    return colorThree;
  }

  if (elementFour.classList.contains('selected')) {
    return colorFour;
  }
}

function paintPixel() {
  const pixel = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', () => {
      pixel[index].style.backgroundColor = palletClicked();
    });
  }
}

// Desafio 9
function clearBoard() {
  const clearButton = document.querySelector('#clear-board');
  const pixelBoard = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixelBoard.length; index += 1) {
    clearButton.addEventListener('click', () => {
      pixelBoard[index].style.backgroundColor = 'white';
    });
  }
}

window.onload = () => {
  paintPixel();
  firstColorSelected();
  selectColor();
  clearBoard();
};
