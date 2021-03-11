const colorOne = document.getElementsByClassName('color-one')[0];
const colorTwo = document.getElementsByClassName('color-two')[0];
const colorThree = document.getElementsByClassName('color-three')[0];
const colorFour = document.getElementsByClassName('color-four')[0];
let pixel = document.getElementsByClassName('pixel');
const btnLimpar = document.getElementById('clear-board');
const pixelBoard = document.getElementById('pixel-board');
const btnVQV = document.getElementById('generate-board');
const inputBoardSize = document.getElementById('board-size');

colorOne.addEventListener('click', () => {
  colorOne.classList.add('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.remove('selected');
  colorFour.classList.remove('selected');
});

colorTwo.addEventListener('click', () => {
/** Source: https://javascript.info/styles-and-classes */
  colorOne.classList.remove('selected');
  colorTwo.classList.add('selected');
  colorThree.classList.remove('selected');
  colorFour.classList.remove('selected');
});

colorThree.addEventListener('click', () => {
/** Source: https://javascript.info/styles-and-classes */
  colorOne.classList.remove('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.add('selected');
  colorFour.classList.remove('selected');
});

colorFour.addEventListener('click', () => {
/** Source: https://javascript.info/styles-and-classes */
  colorOne.classList.remove('selected');
  colorTwo.classList.remove('selected');
  colorThree.classList.remove('selected');
  colorFour.classList.add('selected');
});

function setPixels() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', (event) => {
      const paletteSelectedColor = document.getElementsByClassName('selected')[0];
      const backgroundColor = window.getComputedStyle(paletteSelectedColor, null)
        .getPropertyValue('background-color');
      const pixelColor = event.target;
      pixelColor.style.backgroundColor = backgroundColor;
    });
  }
  pixelBoard.style.width = `${Number(inputBoardSize.value * 40 + 50).toString()}px`;
}

setPixels();

btnLimpar.addEventListener('click', () => {
  pixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});

btnVQV.addEventListener('click', () => {
  if (Number(inputBoardSize.value) === 0) {
    alert('Board inválido!');
  } else {
    pixelBoard.innerHTML = '';
    const boardSize = Number(inputBoardSize.value);
    for (let index = 0; index < boardSize; index += 1) {
      const tableRow = document.createElement('div');
      tableRow.classList.add('tr');
      pixelBoard.appendChild(tableRow);
      for (let indexCell = 0; indexCell < boardSize; indexCell += 1) {
        const pixelElement = document.createElement('div');
        pixelElement.classList.add('pixel');
        tableRow.appendChild(pixelElement);
      }
    }
    pixel = document.getElementsByClassName('pixel');
    setPixels();
  }
});
