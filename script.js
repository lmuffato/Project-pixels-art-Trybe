window.onload = () => {
  const blackPallet = document.querySelector('.black-palette');
  blackPallet.className = 'color black-palette selected';
};

function createPixel(className) {
  const pixel = document.createElement('div');
  pixel.className = className;
  return pixel;
}
function createBreakLine() {
  const breakLine = document.createElement('br');
  return breakLine;
}

function createBoardPixel() {
  const selectPixelBoard = document.querySelector('#pixel-board');

  for (let line = 0; line < 5; line += 1) {
    for (let index = 0; index < 5; index += 1) {
      const newPixel = createPixel('pixel');
      selectPixelBoard.appendChild(newPixel);
    }
    const breakLine = createBreakLine();
    selectPixelBoard.appendChild(breakLine);
  }
}

createBoardPixel();

function selectedColor() {
  const colorPalette = document.querySelectorAll('.color');

  for (let index = 0; index < colorPalette.length; index += 1) {
    colorPalette[index].addEventListener('click', () => {
      colorPalette[index].classList.toggle('selected');
    });
  }
  const selected = document.querySelector('selected');
  return selected;
}

selectedColor();
