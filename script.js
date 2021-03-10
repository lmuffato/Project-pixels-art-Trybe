const colorsList = [];

function preSelectBlack() {
  colorsList[0].classList.add('selected');
}

window.onload = preSelectBlack;

for (let index = 0; index < 4; index += 1) {
  colorsList.push('');
  colorsList[index] = document.createElement('div');
  colorsList[index].classList.add('color');
  document.querySelector('#color-palette').appendChild(colorsList[index]);
}

document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
document.getElementsByClassName('color')[1].style.backgroundColor = 'green';
document.getElementsByClassName('color')[2].style.backgroundColor = 'red';
document.getElementsByClassName('color')[3].style.backgroundColor = 'blue';

const pixelBoard = [];
for (let index = 0; index < 25; index += 1) {
  pixelBoard.push('');
  pixelBoard[index] = document.createElement('div');
  pixelBoard[index].classList.add('pixel');
  document.querySelector('#pixel-board').appendChild(pixelBoard[index]);
}

const clickFirstColor = document.getElementsByClassName('color')[0];
const clickSecondColor = document.getElementsByClassName('color')[1];
const clickThirdColor = document.getElementsByClassName('color')[2];
const clickFourthColor = document.getElementsByClassName('color')[3];

function firstColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickFirstColor.classList.add('selected');
}

function secondColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickSecondColor.classList.add('selected');
}

function thirdColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickThirdColor.classList.add('selected');
}

function fourthColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickFourthColor.classList.add('selected');
}

clickFirstColor.addEventListener('click', firstColor);
clickSecondColor.addEventListener('click', secondColor);
clickThirdColor.addEventListener('click', thirdColor);
clickFourthColor.addEventListener('click', fourthColor);
