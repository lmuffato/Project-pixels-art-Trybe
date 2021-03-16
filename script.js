/* const colorsList = document.querySelectorAll('.color');

colorsList[0].style.backgroundColor = 'black';
colorsList[1].style.backgroundColor = 'red';
colorsList[2].style.backgroundColor = 'green';
colorsList[3].style.backgroundColor = 'blue';

function pixelBoard(size) {
  for (let index = 0; index < size; index += 1) {
    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      document.querySelector('#pixel-board').appendChild(pixel);
    }
  }
}

document.querySelector('#color-palette').addEventListener('click', (selected) => {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  selected.target.classList.add('selected');
});

document.querySelector('#pixel-board').addEventListener('click', (fill) => {
  const color = document.querySelector('.selected').style.backgroundColor;
  const targeted = fill.target;
  targeted.style.backgroundColor = color;
});

document.querySelector('#clear-board').addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});

pixelBoard(5);

AQUI ACABA O JS DE 128
*/

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

const firstColor = document.getElementsByClassName('color')[0];
const secondColor = document.getElementsByClassName('color')[1];
const thirdColor = document.getElementsByClassName('color')[2];
const fourthColor = document.getElementsByClassName('color')[3];
firstColor.style.backgroundColor = 'black';
secondColor.style.backgroundColor = 'green';
thirdColor.style.backgroundColor = 'red';
fourthColor.style.backgroundColor = 'blue';

const pixelBoard = [];
for (let index = 0; index < 25; index += 1) {
  pixelBoard.push('');
  pixelBoard[index] = document.createElement('div');
  pixelBoard[index].classList.add('pixel');
  document.querySelector('#pixel-board').appendChild(pixelBoard[index]);
}

const clickFirstColor = firstColor;
const clickSecondColor = secondColor;
const clickThirdColor = thirdColor;
const clickFourthColor = fourthColor;

function pickFirstColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickFirstColor.classList.add('selected');
}

function pickSecondColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickSecondColor.classList.add('selected');
}

function pickThirdColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickThirdColor.classList.add('selected');
}

function pickFourthColor() {
  clickFirstColor.classList.remove('selected');
  clickSecondColor.classList.remove('selected');
  clickThirdColor.classList.remove('selected');
  clickFourthColor.classList.remove('selected');
  clickFourthColor.classList.add('selected');
}

clickFirstColor.addEventListener('click', pickFirstColor);
clickSecondColor.addEventListener('click', pickSecondColor);
clickThirdColor.addEventListener('click', pickThirdColor);
clickFourthColor.addEventListener('click', pickFourthColor);

const pixels = [];

/* function grabColor() {
  const bGColor = document.querySelector('.selected');
  if (bGColor.style.backgroundColor === firstColor.style.backgroundColor) {
    console.log(bGColor);
  } else if (bGColor.style.backgroundColor === secondColor.style.backgroundColor) {
    console.log(bGColor);
  } else if (bGColor.style.backgroundColor === thirdColor.style.backgroundColor) {
    console.log(bGColor);
  } else if (bGColor.style.backgroundColor === fourthColor.style.backgroundColor) {
    console.log(bGColor);
  }
}
*/

function grabColor() {
  console.log('teste');
}

for (let index = 0; index < pixelBoard.length; index += 1) {
  pixels.push('');
  pixels[index] = document.getElementsByClassName('pixel')[index];
  pixels[index].addEventListener('click', grabColor);
}
