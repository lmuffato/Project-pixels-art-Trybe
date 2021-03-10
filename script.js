function setbkColor() {
  const colorsBlock = document.querySelectorAll('.color');
  const bkColor = ['black', 'midnightblue', 'gold', 'darkred'];
  for (let index = 0; index < colorsBlock.length; index += 1) {
    const color = bkColor[index];
    colorsBlock[index].style.backgroundColor = color;
  }
  return colorsBlock;
}

setbkColor();

function board() {
  const line = document.querySelectorAll('.line');
  for (let index = 0; index < line.length; index += 1) {
    for (let indexToo = 0; indexToo < line.length; indexToo += 1) {
      const pixels = document.createElement('div');
      pixels.setAttribute('class', 'pixel');
      line[index].appendChild(pixels);
    }
  }
}

board();

const begin = document.querySelector('#black');
begin.classList.add('selected');

const pBoard = document.querySelector('#pixel-board');
pBoard.addEventListener('click', function toBoard(element) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const selectedP = element.target;
  selectedP.style.backgroundColor = selectedColor;
});

const colorPalette = document.querySelector('#color-palette');
colorPalette.addEventListener('click', function selectedInPalette(element) {
  const newSelected = element.target;
  const inSelected = document.querySelector('.selected');
  inSelected.classList.remove('selected');
  newSelected.classList.add('selected');
});
