const colorsList = [];

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
