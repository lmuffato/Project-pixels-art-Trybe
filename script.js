// window.onload = () => {
// };
const colorPalette = document.getElementById('color-palette');
const colorElements = document.querySelectorAll('.color');
const pixelBoard = document.getElementById('pixel-board');

function selecElementPallete(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'color-palette') {
    colorElements.forEach((element) => {
      element.classList.remove('selected');
      elementTarget.classList.add('selected');
    });
  }
}

function changeColor(event) {
  const elementTarget = event.target;
  if (elementTarget.id !== 'pixel-board') {
    const colorElementSelected = document.querySelector('.selected').dataset;
    const { color } = colorElementSelected;
    elementTarget.style.backgroundColor = color;
  }
}

colorPalette.addEventListener('click', selecElementPallete);
pixelBoard.addEventListener('click', changeColor);
