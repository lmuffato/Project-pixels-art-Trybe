// window.onload = () => {
// };
const colorPalette = document.getElementById('color-palette');
const colorElements = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');
const clearBoardBtn = document.getElementById('clear-board');

function selecElementPallete(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'color-palette') {
    colorElements.forEach((element) => {
      element.classList.remove('selected');
      elementTarget.classList.add('selected');
    });
  }
}

function getColorElementPalette() {
  const elementSelected = document.querySelector('.selected');
  const color = window.getComputedStyle(elementSelected).getPropertyValue('background-color');
  return color;
}

function changeColorPixels(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'pixel-board') {
    elementTarget.style.backgroundColor = getColorElementPalette();
  }
}

function clearBoardPixels() {
  window.location.reload();
}

colorPalette.addEventListener('click', selecElementPallete);
colorPalette.addEventListener('click', getColorElementPalette);
pixelBoard.addEventListener('click', changeColorPixels);
clearBoardBtn.addEventListener('click', clearBoardPixels);
