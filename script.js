const selectPixelBoard = document.querySelector('#pixel-board');

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
