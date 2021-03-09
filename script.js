const PIXEL_BOARD = 'pixel-board';
function createPixels(n) {
  const pixelBoard = document.getElementById(PIXEL_BOARD);
  for (let index = 0; index < n; index += 1) {
    const row = document.createElement('div');
    row.className = 'pixel';
    pixelBoard.appendChild(row);
  }
}
function createCanvas(x, y) {
  createPixels(x * y);
  // Everything else is done 'automagically' by display flex config
}
function setInitialColor() {
  const firstColor = document.getElementsByClassName('color')[0];
  firstColor.classList.toggle('selected');
}
function changePaletteColor(e) {
  const lastSelected = document.querySelector('#color-palette > .selected');
  lastSelected.classList.toggle('selected');
  e.target.classList.toggle('selected');
}
function createColorPaletteListener() {
  const colorPalette = document.getElementById('color-palette');
  colorPalette.addEventListener('click', changePaletteColor, false);
}
function changePixelColor(e) {
  const selectedPaletteColor = document.querySelector(
    '#color-palette > .selected',
  );
  const newColor = getComputedStyle(selectedPaletteColor).backgroundColor;
  e.target.style.backgroundColor = newColor;
}
function createPixelsListener() {
  const pixelBoard = document.getElementById(PIXEL_BOARD);
  pixelBoard.addEventListener('click', changePixelColor, false);
}
function clearPixelBoard() {
  const pixels = document.getElementById(PIXEL_BOARD).children;
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
function createButtonListener() {
  const btnClearPixelBoard = document.getElementById('clear-board');
  btnClearPixelBoard.addEventListener('click', clearPixelBoard, false);
}
window.onload = function init() {
  createCanvas(5, 5); // hardcoded canvas size
  setInitialColor();
  createColorPaletteListener();
  createPixelsListener();
  createButtonListener();
};
