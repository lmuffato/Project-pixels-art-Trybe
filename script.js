const begin = document.querySelector('#black');
let pix = document.querySelectorAll('.pixel');
const colorPalette = document.querySelector('#color-palette');
const generateBoard = document.querySelector('#generate-board');
let line = document.querySelectorAll('.line');

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
  line = document.querySelectorAll('.line');
  for (let index = 0; index < line.length; index += 1) {
    for (let indexToo = 0; indexToo < line.length; indexToo += 1) {
      const pixels = document.createElement('div');
      pixels.setAttribute('class', 'pixel');
      line[index].appendChild(pixels);
    }
  }

  begin.classList.add('selected');

  pix = document.querySelectorAll('.pixel');
  for (let index = 0; index < pix.length; index += 1) {
    pix[index].addEventListener('click', (element) => { // function toBoard
      const selectedColor = document.querySelector('.selected').style.backgroundColor;
      const selectedP = element.target;
      selectedP.style.backgroundColor = selectedColor;
    });
  }
  const limpar = document.querySelector('#clear-board');
  limpar.addEventListener('click', () => { // function clear
    for (let index = 0; index < pix.length; index += 1) {
      pix[index].style.backgroundColor = 'white';
    }
  });
}
/* const pBoard = document.querySelector('#pixel-board');
pBoard.addEventListener('click', function toBoard(element) {
  const selectedColor = document.querySelector('.selected').style.backgroundColor;
  const selectedP = element.target;
  selectedP.style.backgroundColor = selectedColor;
}); */

colorPalette.addEventListener('click', (element) => { // function selectedInPalette
  const newSelected = element.target;
  const inSelected = document.querySelector('.selected');
  inSelected.classList.remove('selected');
  newSelected.classList.add('selected');
});

generateBoard.addEventListener('click', () => {
  let elementOne = document.querySelector('#board-size').value;
  const ppai = document.querySelector('#pixel-board');
  if (elementOne === '') {
    alert('Board inválido!');
  } else if (elementOne < 5) {
    elementOne = 5;
  } else if (elementOne > 50) {
    elementOne = 50;
  }
  for (let index = 0; index < line.length; index += 1) {
    document.querySelector('#pixel-board').removeChild(line[index]);
  }
  for (let index = 0; index < elementOne; index += 1) {
    const pixEl = document.createElement('div');
    pixEl.classList.add('line');
    ppai.appendChild(pixEl);
  }
  board();
});
