const PIXEL_BOARD = 'pixel-board';
const COLOR_PALETTE = 'color-palette';
const COLOR_COUNT = 4;
const CANVAS_SIZE = { x: 5, y: 5 };
const CLEAR_BOARD = 'clear-board';

function clearPixelBoard() {
  const pixels = document.getElementById(PIXEL_BOARD).children;
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}
function createButtonListener() {
  const btnClearPixelBoard = document.getElementById(CLEAR_BOARD);
  btnClearPixelBoard.addEventListener('click', clearPixelBoard, false);
}
function setInitialColor() {
  const firstColor = document.getElementsByClassName('color')[0];
  firstColor.classList.toggle('selected');
}
function changePaletteColor(e) {
  const lastSelected = document.querySelector(`#${COLOR_PALETTE} > .selected`);
  lastSelected.classList.toggle('selected');
  e.target.classList.toggle('selected');
}
function createColorPaletteListener() {
  const colorPalette = document.getElementById(COLOR_PALETTE);
  colorPalette.addEventListener('click', changePaletteColor, false);
}
function createColors(n) {
  const colorPalette = document.getElementById(COLOR_PALETTE);
  for (let index = 0; index < n; index += 1) {
    const color = document.createElement('div');
    // change from span to div you need a display flex container in css ofc
    color.className = 'color';
    color.innerText = getComputedStyle(color).backgroundColor;
    colorPalette.appendChild(color);
  }
}
function initializeColorPalette() {
  createColors(COLOR_COUNT);
  createColorPaletteListener();
  setInitialColor();
}
function createPixels(n) {
  const pixelBoard = document.getElementById(PIXEL_BOARD);
  for (let index = 0; index < n; index += 1) {
    const row = document.createElement('div');
    row.className = 'pixel';
    pixelBoard.appendChild(row);
  }
}
function changePixelColor(e) {
  const selectedPaletteColor = document.querySelector(
    `#${COLOR_PALETTE} > .selected`,
  );
  const newColor = getComputedStyle(selectedPaletteColor).backgroundColor;
  e.target.style.backgroundColor = newColor;
}
function createPixelsListener() {
  const pixelBoard = document.getElementById(PIXEL_BOARD);
  pixelBoard.addEventListener('click', changePixelColor, false);
}
function initializePixelBoard(x, y) {
  createPixels(x * y);
  createPixelsListener();
  // Everything else is done 'automagically' by display flex config
}
window.onload = function init() {
  initializePixelBoard(CANVAS_SIZE.x, CANVAS_SIZE.y);
  initializeColorPalette();
  createButtonListener();
};
