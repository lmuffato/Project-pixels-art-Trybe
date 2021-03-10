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

function changeColorPixels(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'pixel-board') {
    const colorElementSelected = document.querySelector('.selected').dataset;
    const { color } = colorElementSelected;
    elementTarget.style.backgroundColor = color;
  }
}

function clearBoardPixels() {
  window.location.reload();
}

colorPalette.addEventListener('click', selecElementPallete);
pixelBoard.addEventListener('click', changeColorPixels);
clearBoardBtn.addEventListener('click', clearBoardPixels);
